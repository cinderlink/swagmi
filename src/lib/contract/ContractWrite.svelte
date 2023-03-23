<script lang="ts">
	import { LoadingIndicator } from '@cinderlink/ui-kit/indicator';
	import Contract from './Contract.svelte';

	export let abi: any;
	export let address: string;
	export let method: string;
	export let args: any[];
	export let value: number | string | undefined = undefined;
	export let active = false;
	export const run = () => (active = true);
</script>

<Contract {address} {abi} let:contract>
	{#if active}
		{#await contract?.[method](...args, { value })}
			<slot name="loading">
				<LoadingIndicator />
			</slot>
		{:then tx}
			<slot name="tx" {tx}>
				{#await tx.wait()}
					<slot name="loading">
						<LoadingIndicator />
					</slot>
				{:then result}
					<slot {result} />
				{:catch error}
					<slot {error} name="error">
						<p class="text-red-500">Error: {error.message}</p>
					</slot>
				{/await}
			</slot>
		{:catch error}
			<slot {error} name="error">
				<p class="text-red-500">Error: {error.message}</p>
			</slot>
		{/await}
	{:else}
		<slot {run} />
	{/if}
</Contract>
