<script lang="ts">
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import { fetchSigner } from '@wagmi/core';
	import { getProvider } from '@wagmi/core';
	import { getContract } from '@wagmi/core';
	import type { Contract } from 'ethers';
	import { onMount } from 'svelte';

	export let address: string;
	export let abi: any;
	export let method: string;
	export let args: any[];
	export let interval: number | undefined = undefined;

	let loading = true;
	let contract: Contract;
	let result: unknown;
	let _interval: NodeJS.Timer;
	onMount(async () => {
		const signerOrProvider = (await fetchSigner()) || getProvider();
		contract = getContract({
			address,
			abi,
			signerOrProvider
		});
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

	async function fetchValue() {
		result = await contract?.[method](...args);
		loading = false;
	}
</script>

<slot {loading} {result} />
