<script lang="ts">
	import wagmi, { load } from './store';
	import { onMount, setContext } from 'svelte';
	import type { Chain, Connector } from '@wagmi/core';
	setContext('wagmi', wagmi);

	export let rpc: { http: string; webSocket?: string } | undefined = undefined;
	export let chains: Chain[] | undefined = undefined;
	export let connectors: Connector[] | undefined = undefined;

	onMount(async () => {
		if (!$wagmi.client && !$wagmi.loading) {
			await load({ rpc, chains, connectors });
		}
	});
</script>

{#if $wagmi.connected}
	<slot connected={$wagmi.connected} client={$wagmi.client} />
{:else}
	<slot name="loading" />
{/if}
