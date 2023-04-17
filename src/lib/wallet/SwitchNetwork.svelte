<script lang="ts">
	import { Button, LoadingIndicator } from '@cinderlink/ui-kit';
	import { switchNetwork } from '@wagmi/core';
	import wagmi from '$lib/wagmi/store';
	import wallet from '$lib/wallet/store';

	export let chainId: number;

	let switching = false;
	let error: Error | undefined = undefined;
	async function run() {
		if (!$wagmi.client?.connector) {
			error = new Error('No connector found');
		}
		if (switching) {
			return;
		}
		switching = true;
		await switchNetwork({ chainId }).catch((e: Error) => {
			error = e;
			switching = false;
		});
		switching = false;
	}
</script>

{#if switching}
	<slot name="loading">
		<LoadingIndicator>Switching network...</LoadingIndicator>
	</slot>
{:else if $wallet.chainId === chainId && $wagmi.currentChain?.id === chainId}
	(chain valid)
	<slot />
{:else}
	<slot name="switch" {run} {error}>
		<div class="flex flex-col items-center justify-center gap-4 p-2">
			<div class="i-tabler-warning" />
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
