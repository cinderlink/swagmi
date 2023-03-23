<script lang="ts">
	import { Button } from '@candor/ui-kit/interactive';
	import ConnectModal from '$lib/wallet/ConnectModal.svelte';
</script>

<ConnectModal let:modal>
	<Button on:click={() => modal?.openModal()}>Connect</Button>
</ConnectModal>
