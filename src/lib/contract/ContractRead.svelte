<script lang="ts">
	import { readContract } from '@wagmi/core';
	import { onMount } from 'svelte';
	import wagmi from '$lib/wagmi/store';
	import type { Abi, Address } from 'viem';

	export let address: Address;
	export let abi: Abi;
	export let functionName: string;
	export let args: readonly unknown[] = [];
	export let interval: number | undefined = undefined;

	let loading = true;
	let result: unknown;
	let error: Error | undefined = undefined;
	let _interval: ReturnType<typeof setInterval>;

	async function fetchValue() {
		const { config } = $wagmi;
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
	$: if ($wagmi.config) {
		fetchValue();
	}
</script>

<slot {loading} {result} {error} />
