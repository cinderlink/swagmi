<script lang="ts">
	import type { Contract } from 'ethers';
	import { getContract } from '@wagmi/core';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import wallet from '$lib/wallet/store';
	import { LoadingIndicator } from '@cinderlink/ui-kit';

	export let address: string;
	export let abi: any;
	export let contract: Writable<Contract | undefined> = writable(undefined);
	setContext('contract', contract);

	$: if ($wallet.signer) {
		$contract = getContract({
			address,
			abi,
			signerOrProvider: $wallet.signer
		});
	}
</script>

{#if $contract}
	<slot contract={$contract} />
{:else}
	<slot name="loading">
		<LoadingIndicator>Loading contract...</LoadingIndicator>
	</slot>
{/if}
