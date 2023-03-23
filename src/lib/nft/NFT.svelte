<script lang="ts">
	import { BigNumber } from 'ethers';

	import { openseaAsset } from '$lib/opensea/api';
	import ContractRead from '$lib/contract/ContractRead.svelte';

	export let contract: string;
	export let abi: string;
	export let tokenId: string;
	export let source: 'opensea' | 'contract' = 'opensea';
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
	<ContractRead
		method="tokenURI"
		args={[BigNumber.from(tokenId)]}
		address={contract}
		{abi}
		let:result
	>
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
