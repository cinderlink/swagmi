<script lang="ts">
	// BigNumber import removed - using BigInt directly

	import { openseaAsset } from '$lib/opensea/api';
	import ContractRead from '$lib/contract/ContractRead.svelte';
	import type { Snippet } from 'svelte';

	let {
		contract,
		abi,
		tokenId,
		source = 'opensea',
		children,
		error: errorSnippet
	}: {
		contract: string;
		abi: string;
		tokenId: string;
		source?: 'opensea' | 'contract';
		children?: Snippet<[{ nft: any }]>;
		error?: Snippet<[{ error: any }]>;
	} = $props();
</script>

{#if source === 'opensea'}
	{#await openseaAsset(contract, tokenId) then nft}
		{@render children?.({ nft })}
	{:catch error}
		{@render errorSnippet?.({ error })}
	{/await}
{:else if source === 'contract'}
	<ContractRead functionName="totalSupply" args={[]} address={contract} {abi}>
		{#snippet children({ result })}
			lastTokenId: {result}
		{/snippet}
	</ContractRead>
	<ContractRead functionName="tokenURI" args={[BigInt(tokenId)]} address={contract} {abi}>
		{#snippet children({ result })}
			{#if result}
				{#await fetch(result) then response}
					{#await response.json() then nft}
						{@render children?.({ nft })}
					{:catch fetchError}
						{@render errorSnippet?.({ error: fetchError })}
					{/await}
				{:catch fetchError}
					{@render errorSnippet?.({ error: fetchError })}
				{/await}
			{:else}
				{@render errorSnippet?.({ error: 'Failed to fetch tokenUri' })}
			{/if}
		{/snippet}
	</ContractRead>
{/if}
