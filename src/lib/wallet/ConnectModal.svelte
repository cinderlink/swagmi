<script lang="ts">
	import wagmi from '$lib/wagmi/store';
	import { loadModal, web3modal } from '$lib/wallet/modal';
	import { setContext } from 'svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import { LoadingIndicator } from '@cinderlink/ui-kit';

	export let projectId = '';
	setContext('web3modal', web3modal);
</script>

<Wagmi>
	{#await loadModal(projectId)}
		<slot name="loading">
			<div class="flex flex-col items-center justify-center h-full">
				<LoadingIndicator>Loading...</LoadingIndicator>
			</div>
		</slot>
	{:then}
		<slot wagmi={$wagmi} loading={$web3modal.loading} modal={$web3modal.modal} />
	{/await}
</Wagmi>
