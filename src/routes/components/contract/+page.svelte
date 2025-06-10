<script lang="ts">
	import { Typography, Syntax, LoadingIndicator } from '@cinderlink/ui-kit';
	import CandorEarlyAccess from '$lib/contracts/84531/contracts/CandorEarlyAccess';
	import { wallet } from '$lib/wallet/store.svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import Contract from '$lib/contract/Contract.svelte';
	import ConnectButton from '$lib/wallet/ConnectButton.svelte';
</script>

<Typography>&lt;Contract /&gt;</Typography>
<Typography el="p">Load a contract with the active wagmi provider.</Typography>

<section class="mt-4">
	<Typography el="h2">Usage</Typography>
	<Syntax
		language="svelte"
		code={`<script>
    import { Contract } from "swagmi";
</script>

<Wagmi>
	{#snippet children({ connected, config })}
		{#if connected && wallet.address}
			<Contract address={CandorEarlyAccess.address} abi={CandorEarlyAccess.abi}>
				{#snippet children(contract)}
					{#if contract}
						{#await contract.balanceOf(wallet.address)}
							<div class="i-tabler-loader"></div>
						{:then balance}
							{#if balance}
								<p class="text-green-500">Balance: \${balance}</p>
							{:else}
								<p class="text-purple-100">No balance.</p>
							{/if}
						{:catch}
							<p class="text-red-500">Error checking balance.</p>
						{/await}
					{:else}
						<p>Contract not loaded.</p>
					{/if}
				{/snippet}
			</Contract>
		{:else if config}
			<ConnectButton />
		{:else}
			<LoadingIndicator>Loading client...</LoadingIndicator>
		{/if}
	{/snippet}
</Wagmi>`}
	/>
</section>

<section class="mt-4">
	<Typography el="h4">Output</Typography>
	<Wagmi>
		{#snippet children({ connected, config })}
			{#if connected && wallet.address}
				<Contract address={CandorEarlyAccess.address} abi={CandorEarlyAccess.abi}>
					{#snippet children(contract)}
						{#if contract}
							{#await contract.balanceOf(wallet.address)}
								<div class="i-tabler-loader"></div>
							{:then balance}
								{#if balance}
									<p class="text-green-500">Balance: ${balance}</p>
								{:else}
									<p class="text-purple-100">No balance.</p>
								{/if}
							{:catch}
								<p class="text-red-500">Error checking balance.</p>
							{/await}
						{:else}
							<p>Contract not loaded.</p>
						{/if}
					{/snippet}
				</Contract>
			{:else if config}
				<ConnectButton />
			{:else}
				<LoadingIndicator>Loading client...</LoadingIndicator>
			{/if}
		{/snippet}
	</Wagmi>
</section>
