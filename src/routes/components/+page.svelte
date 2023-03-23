<script lang="ts">
	import { Typography, Card, Panel } from '@candor/ui-kit/content';
</script>

<Typography classes="text-purple-400 dark-(text-yellow-100) flex gap-2 items-center">
	<div class="i-tabler-components" />
	Components
</Typography>

<Typography el="p">
	Simple headless primitives for Web3 applications using Svelte(Kit) + @wagmi/core
</Typography>

<Panel classes="mt-4">
	<section class="grid grid-cols-3 gap-4">
		<Card variant="offset" href="/components/wagmi">
			<Typography el="h2" classes="text-purple-400 dark-(text-green-100)"
				>&lt;Wagmi /&gt;</Typography
			>
			<Typography el="p"
				>Access the <a href="/stores#wagmi">$wagmi</a> store and add it to application context.</Typography
			>
		</Card>
		<Card variant="offset" href="/components/wallet">
			<Typography el="h2" classes="text-purple-400 dark-(text-green-100)">
				&lt;Wallet /&gt;
			</Typography>
			<Typography el="p">
				Access the <a href="/stores#wallet">$wallet</a> store and add it to application context.
			</Typography>
		</Card>
		<Card variant="offset" href="/components/nft">
			<Typography el="h2" classes="text-purple-400 dark-(text-green-100)">&lt;NFT /&gt;</Typography>
			<Typography el="p">Render content based on an NFT.</Typography>
		</Card>
		<Card variant="offset" href="/components/contract">
			<Typography el="h2" classes="text-purple-400 dark-(text-green-100)">
				&lt;Contract /&gt;
			</Typography>
			<Typography el="p">Easily connect to a contract and access its methods and events.</Typography
			>
		</Card>
		<Card variant="offset" href="/components/contract-read">
			<Typography el="h2" classes="text-purple-400 dark-(text-green-100)">
				&lt;ContractRead /&gt;
			</Typography>
			<Typography el="p">
				Easily call read-only contract methods from within a Svelte component.
			</Typography>
		</Card>
		<Card variant="offset" href="/components/contract-write">
			<Typography el="h2" classes="text-purple-400 dark-(text-green-100)">
				&lt;ContractWrite /&gt;
			</Typography>
			<Typography el="p">
				Easily call write contract methods from within a Svelte component.
			</Typography>
		</Card>
		<Card variant="offset" href="/components/transaction">
			<Typography el="h2" classes="text-purple-400 dark-(text-green-100)">
				&lt;Transaction /&gt;
			</Typography>
			<Typography el="p">Render content based on the status of a transaction.</Typography>
		</Card>
	</section>
</Panel>
