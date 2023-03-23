<script lang="ts">
	import { wallet, walletMount } from './store';
	import { onMount, setContext } from 'svelte';
	setContext('wallet', wallet);
	onMount(walletMount);
</script>

<slot wallet={$wallet} />
