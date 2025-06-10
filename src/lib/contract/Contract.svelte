<script lang="ts">
	import { getContract } from 'viem';
	import { getWalletClient, getPublicClient } from '@wagmi/core';
	import { setContext, type Snippet } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import wallet from '$lib/wallet/store.svelte';
	import wagmi from '$lib/wagmi/store.svelte';
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import type { Abi, Address } from 'viem';

	let {
		address,
		abi,
		contract = writable(undefined),
		children,
		loading
	}: {
		address: Address;
		abi: Abi;
		contract?: Writable<any>;
		children?: Snippet<[any]>;
		loading?: Snippet;
	} = $props();
	setContext('contract', contract);

	$effect(() => {
		if (wagmi.config && wallet.connected) {
			updateContract();
		}
	});

	async function updateContract() {
		const { config } = wagmi;
		if (!config) return;

		try {
			const publicClient = getPublicClient(config);
			const walletClient = wallet.connected ? await getWalletClient(config) : undefined;

			$contract = getContract({
				address,
				abi,
				client: walletClient || publicClient
			});
		} catch (error) {
			console.error('Failed to create contract:', error);
		}
	}
</script>

{#if $contract}
	{@render children?.($contract)}
{:else if loading}
	{@render loading()}
{:else}
	<LoadingIndicator>Loading contract...</LoadingIndicator>
{/if}
