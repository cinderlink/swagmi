<script lang="ts">
	import wagmi, { load } from './store';
	import { onMount, setContext } from 'svelte';
	import { env } from '$env/dynamic/public';
	import type { Chain } from '@wagmi/core/chains';
	setContext('wagmi', wagmi);

	export let chains: Chain[] = [];
	export let projectId: string = env.PUBLIC_WALLETCONNECT_PROJECT_ID || '';
	export let appName: string = 'swagmi';

	onMount(async () => {
		if (!$wagmi.config && !$wagmi.loading) {
			await load({ chains, projectId, appName });
		}
	});
</script>

{#if $wagmi.connected && $wagmi.config}
	<slot connected={$wagmi.connected} config={$wagmi.config} />
{:else}
	<slot name="loading" />
{/if}
