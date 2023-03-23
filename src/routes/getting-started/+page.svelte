<script lang="ts">
	import { onMount } from 'svelte';

	import { Typography, Panel } from '@cinderlink/ui-kit/content';
	import { Syntax } from '@cinderlink/ui-kit/markup';
	import WalletConnectButton from '$lib/wallet/WalletConnectButton.svelte';
	import WalletProvider from '$lib/wallet/WalletProvider.svelte';

	let canvas: HTMLCanvasElement;
	onMount(() => {
		console.info(
			`https://rnbwapp.com/wc?uri=${encodeURIComponent(
				'https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId'
			)}`
		);
	});
</script>

<Typography classes="mb-8">Getting started with Sviem</Typography>

<Typography el="h4" classes="text-yellow-100">Install swagmi</Typography>
<Syntax language="zsh" code={`pnpm add swagmi`} />

<Typography el="h4" classes="text-yellow-100">Connecting a Wallet</Typography>
<WalletConnectButton />

<WalletProvider let:connected let:wallet>
	<section slot="loading">This content appears when the wallet is loading</section>
	<section slot="connected">This content appears only if connected</section>
	<section slot="disconnected">This content appears only if disconnected</section>

	<section>
		<div>This content always appears.</div>
		<div>Connected: {connected ? 'true' : 'false'}</div>
		{#if connected}
			<div>
				Address: {wallet.address}
			</div>
		{/if}
	</section>
</WalletProvider>
