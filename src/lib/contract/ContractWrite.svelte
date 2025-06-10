<script lang="ts">
	import Transaction from '$lib/transaction/Transaction.svelte';
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import Contract from './Contract.svelte';
	import { writeContract, waitForTransactionReceipt } from '@wagmi/core';
	import wagmi from '$lib/wagmi/store.svelte';
	import type { Abi, Address, Hash } from 'viem';
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher, type Snippet } from 'svelte';

	let {
		abi,
		address,
		contract = undefined,
		functionName,
		args = [],
		value = undefined,
		receipt = undefined,
		hash = undefined,
		children,
		error: errorSnippet,
		pending,
		receiptSnippet,
		submitting: submittingSnippet,
		idle
	}: {
		abi: Abi;
		address: Address;
		contract?: Writable<any>;
		functionName: string;
		args?: readonly unknown[];
		value?: bigint;
		receipt?: any;
		hash?: Hash;
		children?: Snippet<
			[
				{
					run: (...args: unknown[]) => Promise<void>;
					receipt: any;
					hash: Hash | undefined;
					submitting: boolean;
				}
			]
		>;
		error?: Snippet<[{ error: Error }]>;
		pending?: Snippet<[{ hash: Hash }]>;
		receiptSnippet?: Snippet<[{ receipt: any }]>;
		submitting?: Snippet;
		idle?: Snippet<[{ contract: any; run: (...args: unknown[]) => Promise<void> }]>;
	} = $props();

	const dispatch = createEventDispatcher();

	let submitting = $state(false);
	let error: Error | undefined = $state();

	export const run = async (...additionalArgs: unknown[]) => {
		const { config } = $wagmi;
		if (!config) {
			error = new Error('Wagmi config not available');
			return;
		}

		submitting = true;
		error = undefined;

		try {
			hash = await writeContract(config, {
				address,
				abi,
				functionName,
				args: [...args, ...additionalArgs] as readonly unknown[],
				value
			});

			receipt = await waitForTransactionReceipt(config, { hash });

			if (receipt.status === 'success') {
				dispatch('success', { hash, receipt });
			} else {
				dispatch('error', { hash, receipt });
			}
		} catch (e) {
			error = e as Error;
			dispatch('error', { error });
		} finally {
			submitting = false;
		}
	};
</script>

<Contract bind:contract {address} {abi}>
	{#snippet children(contractInstance)}
		{@render children?.({ run, receipt, hash, submitting })}

		{#if error}
			{#if errorSnippet}
				{@render errorSnippet({ error })}
			{:else}
				<p class="text-red-500">Error: {error.message}</p>
			{/if}
		{:else if hash && !receipt}
			{#if pending}
				{@render pending({ hash })}
			{:else}
				<Transaction {hash} />
			{/if}
		{:else if receipt}
			{#if receiptSnippet}
				{@render receiptSnippet({ receipt })}
			{:else}
				<Transaction {hash} {receipt} />
			{/if}
		{:else if submitting}
			{#if submittingSnippet}
				{@render submittingSnippet()}
			{:else}
				<LoadingIndicator>Submitting transaction...</LoadingIndicator>
			{/if}
		{:else if idle}
			{@render idle({ contract: contractInstance, run })}
		{/if}
	{/snippet}
</Contract>
