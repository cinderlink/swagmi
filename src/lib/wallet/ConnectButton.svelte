<script lang="ts">
	import { type Snippet } from 'svelte';
	import { Button, LoadingIndicator } from '@cinderlink/ui-kit';
	import ConnectModal from '$lib/wallet/ConnectModal.svelte';
	import Wallet from './Wallet.svelte';

	let {
		text = 'Connect Wallet',
		variant = 'green',
		size = 'lg',
		class: className = '',
		connected
	}: {
		text?: string;
		variant?:
			| 'default'
			| 'dark'
			| 'light'
			| 'pink'
			| 'green'
			| 'blue'
			| 'yellow'
			| 'red'
			| 'outline'
			| 'ghost';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		class?: string;
		connected?: Snippet;
	} = $props();
</script>

<ConnectModal>
	{#snippet children({ openModal })}
		<Wallet>
			{#snippet children({ wallet })}
				{#if !wallet}
					<LoadingIndicator />
				{:else if !wallet.connected}
					<Button
						{variant}
						{size}
						class="w-full justify-center {className}"
						onclick={openModal}
						disabled={wallet.connecting}
					>
						{#if wallet.connecting}
							<LoadingIndicator size="sm" />
							<span>Connecting...</span>
						{:else}
							<div class="i-logos-ethereum w-5 h-5"></div>
							<span>{text}</span>
						{/if}
					</Button>
				{:else if connected}
					{@render connected()}
				{:else}
					<div class="text-green-600 dark:text-green-400 font-medium">Connected</div>
				{/if}
			{/snippet}
		</Wallet>
	{/snippet}
</ConnectModal>
