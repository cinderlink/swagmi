<script lang="ts">
	import wagmi from '$lib/wagmi/store';
	import { connectWallet } from '$lib/wallet/store';
	import { setContext } from 'svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import { LoadingIndicator } from '@cinderlink/ui-kit';

	setContext('wagmi', wagmi);

	let showModal = false;

	export function openModal() {
		showModal = true;
	}

	export function closeModal() {
		showModal = false;
	}

	async function handleConnect(connectorId: string) {
		await connectWallet(connectorId);
		closeModal();
	}
</script>

<Wagmi let:connected let:config>
	{#if !connected || !config}
		<slot name="loading">
			<div class="flex flex-col items-center justify-center h-full">
				<LoadingIndicator>Loading...</LoadingIndicator>
			</div>
		</slot>
	{:else}
		<slot wagmi={$wagmi} {openModal} {closeModal} modal={{ openModal, closeModal }} />
	{/if}

	{#if showModal && config}
		<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div class="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
				<h2 class="text-xl font-bold mb-4">Connect Wallet</h2>
				<div class="space-y-2">
					{#each config.connectors as connector}
						<button
							class="w-full p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
							on:click={() => handleConnect(connector.id)}
						>
							{connector.name}
						</button>
					{/each}
				</div>
				<button
					class="mt-4 w-full p-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
					on:click={closeModal}
				>
					Cancel
				</button>
			</div>
		</div>
	{/if}
</Wagmi>
