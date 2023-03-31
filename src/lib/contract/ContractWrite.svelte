<script lang="ts">
	import Transaction from '$lib/transaction/Transaction.svelte';
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import { getProvider } from '@wagmi/core';
	import { getContract } from '@wagmi/core';
	import { fetchSigner } from '@wagmi/core';
	import type { Contract, ContractReceipt, ContractTransaction } from 'ethers';
	import { onMount } from 'svelte';

	export let abi: any;
	export let address: string;
	export let contract: Contract | undefined = undefined;
	export let method: string;
	export let args: any[];
	export let value: number | string | undefined = undefined;

	let loading = true;
	let submitting = false;
	let error: Error | undefined = undefined;

	export let receipt: ContractReceipt | undefined = undefined;
	export let tx: ContractTransaction | undefined = undefined;

	export const run = async () => {
		submitting = true;
		tx = await contract?.[method](...args, { value }).catch((e: Error) => {
			error = e;
			submitting = false;
		});
		receipt = await tx?.wait();
		submitting = false;
	};

	onMount(async () => {
		const signerOrProvider = (await fetchSigner()) || getProvider();
		if (!contract) {
			contract = getContract({
				address,
				abi,
				signerOrProvider
			});
		}
		loading = false;
	});
</script>

<slot {run} {receipt} {tx} {loading} {submitting} />
{#if error}
	<slot {error} name="error">
		<p class="text-red-500">Error: {error.message}</p>
	</slot>
{:else if loading}
	<slot name="loading">
		<LoadingIndicator />
	</slot>
{:else if receipt || tx}
	<slot {tx} {receipt} name="tx">
		<Transaction {tx} />
	</slot>
{:else if submitting}
	<slot name="submitting">
		<LoadingIndicator>Submitting transaction...</LoadingIndicator>
	</slot>
{:else}
	<slot name="pending" {contract} {run} />
{/if}
