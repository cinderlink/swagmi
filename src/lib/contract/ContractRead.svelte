<script lang="ts">
	import { LoadingIndicator } from '@cinderlink/ui-kit';
	import Contract from './Contract.svelte';

	export let address: string;
	export let abi: any;
	export let method: string;
	export let args: any[];
</script>

<Contract {address} {abi} let:contract>
	{#await contract?.[method](...args)}
		<slot name="loading">
			<LoadingIndicator />
		</slot>
	{:then result}
		<slot {result} />
	{:catch error}
		<slot name="error" {error}>
			<p class="text-red-500">Error: {error.message}</p>
		</slot>
	{/await}
</Contract>
