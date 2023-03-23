<script lang="ts">
	import { Button } from '@cinderlink/ui-kit';
	import ConnectModal from '$lib/wallet/ConnectModal.svelte';
</script>

<ConnectModal let:modal>
	<Button on:click={() => modal?.openModal()}>Connect</Button>
</ConnectModal>
