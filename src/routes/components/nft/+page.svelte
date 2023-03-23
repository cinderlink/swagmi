<script lang="ts">
	import { CandorEarlyAccess } from '$lib/registry/contracts';

	import Nft from '$lib/nft/NFT.svelte';

	import { Typography, Button, Syntax } from '@cinderlink/ui-kit';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import Wallet from '$lib/wallet/Wallet.svelte';
	import ConnectModal from '$lib/wallet/ConnectModal.svelte';
	import ConnectButton from '$lib/wallet/ConnectButton.svelte';
	import DisconnectButton from '$lib/wallet/DisconnectButton.svelte';
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
							<div class="i-tabler-not-found" />
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
							<div class="i-tabler-not-found" />
						{/if}
					</Nft>
				</ConnectModal>
			</div>
		{:else}
			<div class="i-tabler-loader animate-spin text-2xl" />
		{/if}
	</Wagmi>
</section>
