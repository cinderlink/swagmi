<script lang="ts">
	import { Button, LoadingIndicator } from '@cinderlink/ui-kit';
	import { switchChain } from '@wagmi/core';
	import wagmi from '$lib/wagmi/store.svelte';
	import wallet from '$lib/wallet/store.svelte';

	let { chainId }: {
		chainId: number;
	} = $props();

	async function run() {
		const { config } = wagmi;
		if (!config) {
			error = new Error('Wagmi config not available');
			return;
		}
		if (switching) {
			return;
		}
		switching = true;
		try {
			await switchChain(config, { chainId });
		} catch (e) {
			error = e as Error;
		}
		switching = false;
	}

	let switching = false;
	let error: Error | undefined = undefined;
</script>

{#if switching}
	<slot name="loading">
		<LoadingIndicator>Switching network...</LoadingIndicator>
	</slot>
{:else if wallet.chainId === chainId}
	<slot />
{:else}
	<slot name="switch" {run} {error}>
		<div class="flex flex-col items-center justify-center gap-4 p-2">
			<div class="i-tabler-warning"></div>
			<h1 class="text-2xl font-bold">Wrong Network</h1>
			<p class="text-gray-500">
				<slot name="message">
					The content you are trying to access is not available on the selected network.
				</slot>
			</p>
			<Button on:click={run}>Switch Network</Button>
		</div>
	</slot>
{/if}
