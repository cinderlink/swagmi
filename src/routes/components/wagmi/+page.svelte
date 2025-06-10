<script lang="ts">
	import { Typography, Syntax } from '@cinderlink/ui-kit';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
</script>

<Typography>&lt;Wagmi /&gt;</Typography>
<Typography el="p">
	Access the <a href="/stores#wagmi">$wagmi</a> store and add it to application context.
</Typography>

<section class="mt-4">
	<Typography el="h2">Usage</Typography>
	<Syntax
		language="svelte"
		code={`<script>
    import { Wagmi } from "swagmi";
</script>

<Wagmi>
	{#snippet children({ connected, config })}
		{#if connected && config}
			<p class="text-green-500">Connected with config.</p>
		{:else}
			<p>Not connected.</p>
		{/if}
	{/snippet}
</Wagmi>`}
	/>
</section>

<section class="mt-4">
	<Typography el="h4">Output</Typography>
	<Wagmi>
		{#snippet children({ connected, config })}
			{#if connected && config}
				<p class="text-green-500">Connected with config.</p>
			{:else}
				<p>Not connected.</p>
			{/if}
		{/snippet}
	</Wagmi>
</section>
