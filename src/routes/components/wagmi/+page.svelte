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

<Wagmi let:client>
	{#if client}
		<p class="text-green-500">Client present.</p>
	{:else}
		<p>Client not detected.</p>
	{/if}
</Wagmi>`}
	/>
</section>

<section class="mt-4">
	<Typography el="h4">Output</Typography>
	<Wagmi let:client>
		{#if client}
			<p class="text-green-500">Client present.</p>
		{:else}
			<p>Client not detected.</p>
		{/if}
	</Wagmi>
</section>
