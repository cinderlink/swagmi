<script lang="ts">
	import { Button, LoadingIndicator } from '@cinderlink/ui-kit';
	import ConnectModal from '$lib/wallet/ConnectModal.svelte';
	import Wallet from './Wallet.svelte';

	let connectModal: ConnectModal;
</script>

<ConnectModal bind:this={connectModal} let:modal>
	<Wallet let:wallet>
		{#if !wallet}
			<LoadingIndicator />
		{:else if !wallet.connected}
			<Button
				width="w-full"
				size="lg"
				variant="green"
				on:click={() => connectModal?.openModal()}
				justify="justify-center"
				disabled={wallet.connecting}
			>
				{#if wallet.connecting}
					<LoadingIndicator size="sm" />
					Connecting...
				{:else}
					<div class="i-logos-ethereum"></div>
					Sign In with Ethereum
				{/if}
			</Button>
		{:else}
			<slot name="connected">Connected</slot>
		{/if}
	</Wallet>
</ConnectModal>
