<script lang="ts">
	import type { Contract } from 'ethers';
	import { fetchSigner, getContract, getProvider } from '@wagmi/core';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import wagmi from '$lib/wagmi/store';

	export let address: string;
	export let abi: any;

	let loading = true;
	let contract: Writable<Contract | undefined> = writable(undefined);
	setContext('contract', contract);

	$: if ($wagmi.connected && !$contract) {
		load();
	}

	async function load() {
		console.info('loading contract');
		loading = false;
		const signerOrProvider = (await fetchSigner()) || getProvider();
		$contract = getContract({
			address,
			abi,
			signerOrProvider
		});
	}
</script>

<slot {loading} contract={$contract} />
