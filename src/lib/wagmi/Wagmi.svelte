<script lang="ts">
	import wagmi, { load } from './store';
	import { onMount, setContext } from 'svelte';
	import { env } from '$env/dynamic/public';
	import type { Chain, Connector } from '@wagmi/core';
	setContext('wagmi', wagmi);

	export let chains: Chain[] = [];
	export let currentChain: Chain | undefined = undefined;
	export let projectId: string = env.PUBLIC_WALLETCONNECT_PROJECT_ID || '';
	export let connectors: Connector[] | undefined = undefined;
	export let rpc: { http: string; webSocket?: string } | undefined = undefined;

	onMount(async () => {
		if (!$wagmi.client && !$wagmi.loading) {
			await load({ rpc, chains, currentChain, connectors, projectId });
		}
	});
</script>

{#if $wagmi.connected && $wagmi.client}
	<slot connected={$wagmi.connected} client={$wagmi.client} />
{:else}
	<slot name="loading" />
{/if}
