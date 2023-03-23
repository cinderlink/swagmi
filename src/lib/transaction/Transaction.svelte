<script lang="ts">
	import { Typography, Panel } from '@cinderlink/ui-kit/content';
	import { LoadingIndicator } from '@cinderlink/ui-kit/indicator';
	import { waitForTransaction } from '@wagmi/core';
	import type { ContractReceipt, Transaction } from 'ethers';
	import Receipt from './Receipt.svelte';

	export let explorerUrl: string | undefined = undefined;
	export let tx: Transaction | undefined = undefined;
	export let receipt: ContractReceipt | undefined = undefined;
	export let confirmations = 12;
	export let hash: `0x${string}` | undefined = undefined;
	export let chainId = 1;

	$: if (tx) {
		chainId = tx.chainId as number;
		hash = tx.hash as `0x${string}`;
	}
</script>

<Panel variant="offset" size="xs">
	{#if hash}
		<div class="flex items-center justify-between px-2 pt-1">
			<a
				href={explorerUrl ? `${explorerUrl}/tx/${hash}` : '#'}
				class="text-sm text-purple-200 flex items-center gap-2"
			>
				<div class="i-tabler-map" />
				{hash}
			</a>
		</div>
	{/if}
	{#if receipt}
		<Receipt {receipt} />
	{:else if hash && chainId}
		{#await waitForTransaction({ chainId: chainId, hash, confirmations })}
			<LoadingIndicator>
				Transaction submitted. Waiting for {confirmations} confirmations.
				{#if hash}({hash}){/if}
			</LoadingIndicator>
		{:then receipt}
			<Receipt {receipt} />
		{/await}
	{/if}
</Panel>
