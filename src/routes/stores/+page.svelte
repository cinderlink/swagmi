<script lang="ts">
	/* eslint-disable @typescript-eslint/no-unused-vars */
	import { Typography, Panel, Syntax } from '@cinderlink/ui-kit';
</script>

<Typography classes="text-purple-500 dark-(text-yellow-100) flex gap-2 items-center">
	<div class="i-tabler-activity-heartbeat"></div>
	Stores
</Typography>
<Typography el="p">
	<strong>swagmi</strong> provides a collection of Svelte stores that can be used to build Web3 applications.
	The stores are built on top of the @wagmi/core library.
</Typography>

<hr class="my-6" />

<Typography el="h2" classes="text-purple-400 dark-(text-green-100)">wagmi</Typography>
<Panel>
	<section id="wagmi">
		<Typography el="p">
			<span class="text-purple-400 dark-(text-green-100)">wagmi</span> is a Svelte store that provides
			access to the @wagmi/core client and connection state.
		</Typography>

		<Typography el="h4" classes="mt-4 text-purple-100 dark-(text-purple-200)">Interface</Typography>
		<Syntax
			language="ts"
			code={`export interface WagmiStore {
	loading: boolean;
	connected: boolean;
	currentChain?: string;
	client?: Client<Provider, WebSocketProvider>;
};`}
		/>

		<Typography el="h4" classes="mt-4 text-purple-100 dark-(text-purple-200)">Functions</Typography>
		<Typography el="p"
			>The wagmi store exports a <strong>load</strong> function that can be used to initialize the @wagmi/core
			library.</Typography
		>
		<Syntax
			language="ts"
			code={`import { wagmi, load } from 'swagmi/store';
import { onMount } from 'svelte';
onMount(async () => {
    await load();
});
$: console.log(wagmi.client);
`}
		/>
	</section>
</Panel>

<hr class="my-6" />

<Typography el="h2" classes="text-purple-400 dark-(text-green-100)">wallet</Typography>
<Panel>
	<section id="wallet">
		<Typography el="p">
			<span class="text-purple-400 dark-(text-green-100)">wallet</span> is a Svelte store that provides
			access to the connected @wagmi/core wallet, balance, display name, and avatar.
		</Typography>

		<Typography el="h4" classes="mt-4 text-purple-100 dark-(text-purple-200)">Interface</Typography>
		<Syntax
			language="ts"
			code={`export interface WalletStore {
    loading: boolean;
    connected: boolean;
    address?: \`0x\${string}\`;
    balance?: FetchBalanceResult;
    balanceFormatted?: string;
    displayName?: string;
    avatar?: string;
}`}
		/>

		<Typography el="h4" classes="mt-4 text-purple-100 dark-(text-purple-200)">Functions</Typography>
		<Typography el="p">
			The <span class="text-purple-400 dark-(text-green-100)">wallet</span> exports the following functions:
		</Typography>
		<ul>
			<li>
				<Typography el="p">
					<strong>connect</strong> - Connects the wallet to the @wagmi/core client.
				</Typography>
			</li>
			<li>
				<Typography el="p">
					<strong>disconnect</strong> - Disconnects the wallet from the @wagmi/core client.
				</Typography>
			</li>
			<li>
				<Typography el="p">
					<strong>walletMount</strong> - Binds wallet listeners to the @wagmi/core client. Returns
					an unsubscribe function. Typically called in the <strong>onMount</strong> lifecycle hook.
				</Typography>
			</li>
		</ul>
		<Syntax
			language="svelte"
			code={`<script>
import { wallet, connect, disconnect, walletMount } from 'swagmi/store';
import { onMount } from 'svelte';
onMount(walletMount);
</script>

{#if wallet.connected}
    <button on:click={disconnect}>Disconnect</button>
{:else}
    <button on:click={connect}>Connect</button>
{/if}`}
		/>
	</section>
</Panel>
