<script lang="ts">
	import { wallet, walletMount } from './store.svelte';
	import { onMount, setContext } from 'svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	setContext('wallet', wallet);
	onMount(walletMount);
</script>

<Wagmi>
	<slot wallet={wallet} />
</Wagmi>
