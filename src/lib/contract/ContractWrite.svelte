<script lang="ts">
	import Transaction from '$lib/transaction/Transaction.svelte';
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import Contract from './Contract.svelte';
	import { writeContract, waitForTransactionReceipt } from '@wagmi/core';
	import wagmi from '$lib/wagmi/store';
	import type { Abi, Address, Hash } from 'viem';
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';

	export let abi: Abi;
	export let address: Address;
	export let contract: Writable<any> | undefined = undefined;
	export let functionName: string;
	export let args: readonly unknown[] = [];
	export let value: bigint | undefined = undefined;

	const dispatch = createEventDispatcher();

	let submitting = false;
	let error: Error | undefined = undefined;

	export let receipt: any = undefined;
	export let hash: Hash | undefined = undefined;

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
	<slot {run} {receipt} {hash} {submitting} />
	{#if error}
		<slot {error} name="error">
			<p class="text-red-500">Error: {error.message}</p>
		</slot>
	{:else if hash && !receipt}
		<slot {hash} name="pending">
			<Transaction {hash} />
		</slot>
	{:else if receipt}
		<slot {receipt} name="receipt">
			<Transaction {hash} {receipt} />
		</slot>
	{:else if submitting}
		<slot name="submitting">
			<LoadingIndicator>Submitting transaction...</LoadingIndicator>
		</slot>
	{:else}
		<slot name="idle" contract={$contract} {run} />
	{/if}
</Contract>
