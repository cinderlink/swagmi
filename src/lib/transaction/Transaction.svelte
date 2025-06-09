<script lang="ts">
	import { Panel, LoadingIndicator } from '@cinderlink/ui-kit';
	import { waitForTransactionReceipt } from '@wagmi/core';
	import wagmi from '$lib/wagmi/store.svelte';
	import wallet from '$lib/wallet/store.svelte';
	import type { Hash } from 'viem';
	import Receipt from './Receipt.svelte';

	let { explorerUrl = undefined, receipt = undefined, confirmations = 12, hash = undefined }: {
		explorerUrl?: string;
		receipt?: any;
		confirmations?: number;
		hash?: Hash;
	} = $props();

	let chainId = $derived(wallet.chainId || 1);
</script>

<Panel variant="offset" size="xs">
	{#if hash}
		<div class="flex items-center justify-between px-2 pt-1">
			<a
				href={explorerUrl ? `${explorerUrl}/tx/${hash}` : '#'}
				class="text-sm text-purple-200 flex items-center gap-2"
			>
				<div class="i-tabler-map"></div>
				{hash}
			</a>
		</div>
	{/if}
	{#if receipt}
		<Receipt {receipt} {explorerUrl} />
	{:else if hash && wagmi.config}
		{#await waitForTransactionReceipt(wagmi.config, { hash, confirmations })}
			<LoadingIndicator>
				Transaction submitted. Waiting for {confirmations} confirmations.
				{#if hash}({hash}){/if}
			</LoadingIndicator>
		{:then transactionReceipt}
			<Receipt receipt={transactionReceipt} {explorerUrl} />
		{/await}
	{/if}
</Panel>
