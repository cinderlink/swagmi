<script lang="ts">
	import Transaction from '$lib/transaction/Transaction.svelte';
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import Contract from './Contract.svelte';
	import type * as ethers  from 'ethers';
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';

	export let abi: any;
	export let address: string;
	export let contract: Writable<ethers.Contract | undefined> | undefined = undefined;
	export let method: string;
	export let args: any[];
	export let value: number | string | undefined = undefined;

	const dispatch = createEventDispatcher();

	let submitting = false;
	let error: Error | undefined = undefined;

	export let receipt: ethers.ContractReceipt | undefined = undefined;
	export let tx: ethers.ContractTransaction | undefined = undefined;

	export const run = async (...arg: any[]) => {
		submitting = true;
		tx = await $contract?.[method](...[...args, ...arg], { value }).catch((e: Error) => {
			error = e;
			submitting = false;
		});
		receipt = await tx?.wait();
		if (tx && receipt?.status === 1) {
			dispatch('success', { tx, receipt })
		} else {
			dispatch('error', { tx, receipt })
		}
		submitting = false;
	};
</script>

<Contract bind:contract {address} {abi}>
	<slot {run} {receipt} {tx} {submitting} />
	{#if error}
		<slot {error} name="error">
			<p class="text-red-500">Error: {error.message}</p>
		</slot>
	{:else if tx}
		<slot {tx} name="tx">
			<Transaction {tx} />
		</slot>
	{:else if receipt}
		<slot {receipt} name="receipt">
			<Transaction {tx} {receipt} />
		</slot>
	{:else if submitting}
		<slot name="submitting">
			<LoadingIndicator>Submitting transaction...</LoadingIndicator>
		</slot>
	{:else}
		<slot name="pending" contract={$contract} {run} />
	{/if}
</Contract>
