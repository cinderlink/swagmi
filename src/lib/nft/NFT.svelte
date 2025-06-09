<script lang="ts">
	// BigNumber import removed - using BigInt directly

	import { openseaAsset } from '$lib/opensea/api';
	import ContractRead from '$lib/contract/ContractRead.svelte';

	let { contract, abi, tokenId, source = 'opensea' }: {
		contract: string;
		abi: string;
		tokenId: string;
		source?: 'opensea' | 'contract';
	} = $props();
</script>

{#if source === 'opensea'}
	{#await openseaAsset(contract, tokenId) then nft}
		<slot {nft} />
	{:catch error}
		<slot {error} />
	{/await}
{:else if source === 'contract'}
	<ContractRead method="totalSupply" args={[]} address={contract} {abi} let:result>
		lastTokenId: {result}
	</ContractRead>
	<ContractRead method="tokenURI" args={[BigInt(tokenId)]} address={contract} {abi} let:result>
		{#if result}
			{#await fetch(result) then response}
				{#await response.json() then nft}
					<slot {nft} />
				{:catch error}
					<slot name="error" {error} />
				{/await}
			{:catch error}
				<slot name="error" {error} />
			{/await}
		{:else}
			<slot name="error" error="Failed to fetch tokenUri" />
		{/if}
	</ContractRead>
{/if}
