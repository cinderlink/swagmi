<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unused-vars */
	import CandorEarlyAccess from '$lib/contracts/84531/contracts/CandorEarlyAccess';

	import Nft from '$lib/nft/NFT.svelte';

	import { Typography, Syntax } from '@cinderlink/ui-kit';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import ConnectModal from '$lib/wallet/ConnectModal.svelte';
</script>

<Typography>&lt;NFT /&gt;</Typography>
<Typography el="p">Render content based on NFT metadata.</Typography>

<section class="mt-4">
	<Typography el="h2">Usage</Typography>
	<Syntax
		language="svelte"
		code={`<script>
    import { NFT } from "swagmi";
</script>

<NFT contract="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb" tokenId=1 let:nft>
    {#if nft}
        <img src="{nft.image_url}" alt="{nft.name}" />
    {:else}
        <div class="i-tabler-not-found"></div>
    {/if}
</NFT>`}
	/>
</section>

<section class="mt-4 flex flex-row gap-4">
	<Wagmi let:client>
		{#if client}
			<div class="w-1/2">
				<Typography el="h4">Opensea</Typography>
				<ConnectModal>
					<Nft contract="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb" tokenId="1" let:nft>
						{#if nft}
							<img src={nft.image_url} alt={nft.name} />
						{:else}
							<div class="i-tabler-not-found"></div>
						{/if}
					</Nft>
				</ConnectModal>
			</div>
			<div class="w-1/2">
				<Typography el="h4">Contract</Typography>
				<ConnectModal>
					<Nft
						source="contract"
						contract={CandorEarlyAccess.address}
						abi={CandorEarlyAccess.abi}
						tokenId={1}
						let:nft
					>
						{#if nft}
							<img src={nft.image_url} alt={nft.name} />
						{:else}
							<div class="i-tabler-not-found"></div>
						{/if}
					</Nft>
				</ConnectModal>
			</div>
		{:else}
			<div class="i-tabler-loader animate-spin text-2xl"></div>
		{/if}
	</Wagmi>
</section>
