<script lang="ts">
	import { readContract } from '@wagmi/core';
	import { onMount } from 'svelte';
	import wagmi from '$lib/wagmi/store.svelte';
	import type { Abi, Address } from 'viem';

	let { address, abi, functionName, args = [], interval = undefined }: {
		address: Address;
		abi: Abi;
		functionName: string;
		args?: readonly unknown[];
		interval?: number;
	} = $props();

	let loading = $state(true);
	let result: unknown = $state();
	let error: Error | undefined = $state();
	let _interval: ReturnType<typeof setInterval>;

	async function fetchValue() {
		const { config } = wagmi;
		if (!config) return;

		try {
			error = undefined;
			result = await readContract(config, {
				address,
				abi,
				functionName,
				args
			});
			loading = false;
		} catch (err) {
			error = err as Error;
			loading = false;
			console.error('Contract read error:', err);
		}
	}

	onMount(async () => {
		await fetchValue();

		if (interval) {
			_interval = setInterval(fetchValue, interval);
		}

		return () => {
			if (_interval) {
				clearInterval(_interval);
			}
		};
	});

	// Reactive updates when dependencies change
	$effect(() => {
		if (wagmi.config) {
			fetchValue();
		}
	});
</script>

<slot {loading} {result} {error} />
