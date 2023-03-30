<script lang="ts">
	import type { Contract } from 'ethers';
	import { fetchSigner, getContract, getProvider } from '@wagmi/core';
	import { onMount, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let address: string;
	export let abi: any;

	let loading = true;
	let contract: Writable<Contract | undefined> = writable(undefined);
	setContext('contract', contract);

	onMount(async () => {
		const signerOrProvider = (await fetchSigner()) || getProvider();
		$contract = getContract({
			address,
			abi,
			signerOrProvider
		});
		loading = false;
	});
</script>

<slot {loading} contract={$contract} />
