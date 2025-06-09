<script lang="ts">
	import { getContract } from 'viem';
	import { getWalletClient, getPublicClient } from '@wagmi/core';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import wallet from '$lib/wallet/store';
	import wagmi from '$lib/wagmi/store';
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import type { Abi, Address } from 'viem';

	export let address: Address;
	export let abi: Abi;
	export let contract: Writable<any> = writable(undefined);
	setContext('contract', contract);

	$: if ($wagmi.config && $wallet.connected) {
		updateContract();
	}

	async function updateContract() {
		const { config } = $wagmi;
		if (!config) return;

		try {
			const publicClient = getPublicClient(config);
			const walletClient = $wallet.connected ? await getWalletClient(config) : undefined;

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
	<slot contract={$contract} />
{:else}
	<slot name="loading">
		<LoadingIndicator>Loading contract...</LoadingIndicator>
	</slot>
{/if}
