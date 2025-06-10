<script lang="ts">
	import { type Snippet } from 'svelte';
	import { Modal, Button, Typography, LoadingIndicator } from '@cinderlink/ui-kit';
	import { connectWallet } from '$lib/wallet/store.svelte';
	import { modal } from './modal.svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';

	let {
		loading
	}: {
		loading?: Snippet;
		children?: Snippet<[{ openModal: () => void; closeModal: () => void; modal: typeof modal }]>;
	} = $props();

	const openModal = () => {
		modal.show();
	};

	const closeModal = () => {
		modal.hide();
	};

	const handleConnect = async (connectorId: string) => {
		try {
			await connectWallet(connectorId);
			closeModal();
		} catch (error) {
			console.error('Failed to connect wallet:', error);
			// Keep modal open on error so user can try again
		}
	};
</script>

<Wagmi>
	{#snippet children({ connected, config })}
		{#if !connected || !config}
			{#if loading}
				{@render loading()}
			{:else}
				<div class="flex flex-col items-center justify-center h-full">
					<LoadingIndicator>Loading...</LoadingIndicator>
				</div>
			{/if}
		{:else if children}
			{@render children({ openModal, closeModal, modal })}
		{/if}

		<Modal bind:visible={modal.isOpen}>
			{#snippet header()}
				<Typography el="h3" class="text-xl font-bold">Connect Wallet</Typography>
				<Button variant="ghost" size="sm" onclick={closeModal} class="ml-auto">
					<div class="i-tabler-x w-4 h-4"></div>
				</Button>
			{/snippet}

			<div class="space-y-3">
				<Typography el="p" class="text-gray-600 dark:text-gray-400 mb-4">
					Choose a wallet to connect to this application
				</Typography>

				{#if config?.connectors}
					{#each config.connectors as connector}
						<Button
							variant="outline"
							size="lg"
							class="w-full justify-start"
							onclick={() => handleConnect(connector.id)}
						>
							<div class="flex items-center gap-3">
								{#if connector.id === 'injected'}
									<div class="i-tabler-wallet w-5 h-5"></div>
								{:else if connector.id === 'walletConnect'}
									<div class="i-tabler-qrcode w-5 h-5"></div>
								{:else if connector.id === 'coinbaseWallet'}
									<div class="i-tabler-brand-coinbase w-5 h-5"></div>
								{:else if connector.id === 'safe'}
									<div class="i-tabler-shield-check w-5 h-5"></div>
								{:else}
									<div class="i-tabler-plug w-5 h-5"></div>
								{/if}
								<span>{connector.name}</span>
							</div>
						</Button>
					{/each}
				{/if}
			</div>

			{#snippet footer()}
				<div class="flex justify-end gap-2">
					<Button variant="ghost" onclick={closeModal}>Cancel</Button>
				</div>
			{/snippet}
		</Modal>
	{/snippet}
</Wagmi>
