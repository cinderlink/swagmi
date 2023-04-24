<script lang="ts">
	import wagmi from '$lib/wagmi/store';
	import { loadModal, web3modal } from '$lib/wallet/modal';
	import { setContext } from 'svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import { env } from '$env/dynamic/public';

	export let projectId = env.PUBLIC_WALLETCONNECT_PROJECT_ID || '';
	setContext('web3modal', web3modal);
</script>

<Wagmi let:connected let:client>
	{#if connected && client && !$web3modal.loaded && !$web3modal.loading}
		{#await loadModal(projectId)}
			<LoadingIndicator>Loading modal...</LoadingIndicator>
		{/await}
	{/if}
	{#if $web3modal.loading || !connected || !$web3modal.loaded}
		<slot name="loading">
			<div class="flex flex-col items-center justify-center h-full">
				<LoadingIndicator>Loading...</LoadingIndicator>
			</div>
		</slot>
	{:else}
		<slot wagmi={$wagmi} loading={$web3modal.loading} modal={$web3modal.modal} />
	{/if}
</Wagmi>
