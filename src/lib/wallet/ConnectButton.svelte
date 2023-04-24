<script lang="ts">
	import { Button, LoadingIndicator } from '@cinderlink/ui-kit';
	import ConnectModal from '$lib/wallet/ConnectModal.svelte';
	import Wallet from './Wallet.svelte';
</script>

<ConnectModal let:modal>
	<Wallet let:wallet>
		{#if !wallet}
			<LoadingIndicator />
		{:else if !wallet.connected}
			<Button width="w-full" size="lg" variant="green" on:click={() => modal?.openModal()} justify="justify-center">
				<div class="i-logos-ethereum"></div>
				Sign In with Ethereum
			</Button>
		{:else}
			<slot name="connected">Connected</slot>
		{/if}
	</Wallet>
</ConnectModal>
