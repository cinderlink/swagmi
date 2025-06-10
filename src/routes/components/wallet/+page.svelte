<script lang="ts">
	import { Typography, Syntax } from '@cinderlink/ui-kit';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import Wallet from '$lib/wallet/Wallet.svelte';
	import ConnectButton from '$lib/wallet/ConnectButton.svelte';
	import DisconnectButton from '$lib/wallet/DisconnectButton.svelte';
</script>

<Typography>&lt;Wallet /&gt;</Typography>
<Typography el="p">
	Access the <a href="/stores#wallet">wallet</a> store and add it to application context.
</Typography>

<section class="mt-4">
	<Typography el="h2">Usage</Typography>
	<Syntax
		language="svelte"
		code={`<script>
    import { Wallet } from "swagmi";
</script>

<Wallet>
    {#snippet children({ wallet })}
        {#if wallet.connected}
            <p class="text-green-500">Connected as {wallet.address}</p>
        {:else}
            <p class="text-purple-100">Not connected.</p>
        {/if}
    {/snippet}
</Wallet>`}
	/>
</section>

<section class="mt-4">
	<Typography el="h4">ConnectButton with Modal</Typography>
	<Syntax
		language="svelte"
		code={`<script>
    import { ConnectButton } from "swagmi";
</script>

<ConnectButton>
    {#snippet connected()}
        <p class="text-green-500">✓ Wallet Connected</p>
    {/snippet}
</ConnectButton>`}
	/>

	<div class="mt-4 p-4 border rounded-lg">
		<ConnectButton>
			{#snippet connected()}
				<div class="flex items-center gap-2 text-green-600 dark:text-green-400">
					<div class="i-tabler-check w-4 h-4"></div>
					<span class="font-medium">Wallet Connected</span>
				</div>
			{/snippet}
		</ConnectButton>
	</div>
</section>

<section class="mt-4">
	<Typography el="h4">Wallet Component Output</Typography>

	<div class="mt-4 p-4 border rounded-lg">
		<Wagmi>
			{#snippet children({ connected })}
				{#if connected}
					<Wallet>
						{#snippet children({ wallet })}
							{#if wallet?.connected}
								<div class="space-y-2">
									<p class="text-green-500">Connected as {wallet.address}</p>
									<DisconnectButton />
								</div>
							{:else}
								<p class="text-purple-100">Not connected.</p>
							{/if}
						{/snippet}
					</Wallet>
				{:else}
					<div class="flex items-center gap-2">
						<div class="i-tabler-loader animate-spin text-xl"></div>
						<span>Initializing...</span>
					</div>
				{/if}
			{/snippet}
		</Wagmi>
	</div>
</section>
