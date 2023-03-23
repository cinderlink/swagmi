<script lang="ts">
	import { Button } from '@cinderlink/ui-kit/interactive';
	import { disconnectWallet } from '$lib/wallet/store';
</script>

<Button
	{...$$restProps}
	on:click={() => {
		disconnectWallet();
	}}><slot>Disconnect</slot></Button
>
