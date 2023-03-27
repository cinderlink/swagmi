<script lang="ts">
	import wagmi from '$lib/wagmi/store';
	import { loadModal, web3modal } from '$lib/wallet/modal';
	import { wallet, walletMount } from './store';
	import { onMount, setContext } from 'svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';

	export let projectId = '';
	$: if ($wagmi.client && !$web3modal.loading && !$web3modal.modal) {
		loadModal(projectId);
	}
	onMount(() => {
		if (!$wallet.mounted) {
			return walletMount();
		}
	});

	setContext('web3modal', web3modal);
</script>

<Wagmi>
	<slot wagmi={$wagmi} loading={$web3modal.loading} modal={$web3modal.modal} />
</Wagmi>
