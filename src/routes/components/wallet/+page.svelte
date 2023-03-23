<script lang="ts">
	import { Typography } from '@cinderlink/ui-kit/content';
	import { Button } from '@cinderlink/ui-kit/interactive';
	import { Syntax } from '@cinderlink/ui-kit/markup';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import Wallet from '$lib/wallet/Wallet.svelte';
	import ConnectModal from '$lib/wallet/ConnectModal.svelte';
	import ConnectButton from '$lib/wallet/ConnectButton.svelte';
	import DisconnectButton from '$lib/wallet/DisconnectButton.svelte';
</script>

<Typography>&lt;Wallet /&gt;</Typography>
<Typography el="p">
	Access the <a href="/stores#wallet">$wallet</a> store and add it to application context.
</Typography>

<section class="mt-4">
	<Typography el="h2">Usage</Typography>
	<Syntax
		language="svelte"
		code={`<script>
    import { Wallet } from "swagmi";
</script>

<Wallet let:wallet>
    {#if $wallet.connected}
        <p class="text-green-500">Connected as {$wallet.address}</p>
    {:else}
        <p class="text-purple-100">Not connected.</p>
    {/if}
</Wallet>`}
	/>
</section>

<section class="mt-4">
	<Typography el="h4">Output</Typography>

	<Wagmi let:client>
		{#if client}
			<ConnectModal>
				<Wallet let:wallet>
					{#if wallet?.connected}
						<p class="text-green-500">Connected as {wallet.address}</p>
						<DisconnectButton />
					{:else}
						<p class="text-purple-100">Not connected.</p>
						<ConnectButton />
					{/if}
				</Wallet>
			</ConnectModal>
		{:else}
			<div class="i-tabler-loader animate-spin text-2xl" />
		{/if}
	</Wagmi>
</section>
