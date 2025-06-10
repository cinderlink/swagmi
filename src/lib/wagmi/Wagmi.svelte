<script lang="ts">
	import wagmi, { load } from './store.svelte';
	import { onMount, setContext, type Snippet } from 'svelte';
	import { env } from '$env/dynamic/public';
	import type { Chain } from '@wagmi/core/chains';
	setContext('wagmi', wagmi);

	let {
		chains = [],
		projectId = env.PUBLIC_WALLETCONNECT_PROJECT_ID || '',
		appName = 'swagmi',
		children,
		loading
	}: {
		chains?: Chain[];
		projectId?: string;
		appName?: string;
		children?: Snippet<[{ connected: boolean; config: any }]>;
		loading?: Snippet;
	} = $props();

	onMount(async () => {
		if (!wagmi.config && !wagmi.loading) {
			await load({ chains, projectId, appName });
		}
	});
</script>

{#if wagmi.connected && wagmi.config}
	{@render children?.({ connected: wagmi.connected, config: wagmi.config })}
{:else}
	{@render loading?.()}
{/if}
