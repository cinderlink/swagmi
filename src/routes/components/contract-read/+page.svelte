<script lang="ts">
	import { Typography, Syntax, LoadingIndicator } from '@cinderlink/ui-kit';
	import CandorEarlyAccess from '$lib/contracts/84531/contracts/CandorEarlyAccess';
	import { wallet } from '$lib/wallet/store.svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import ContractRead from '$lib/contract/ContractRead.svelte';
	import ConnectButton from '$lib/wallet/ConnectButton.svelte';
</script>

<Typography>&lt;ContractRead /&gt;</Typography>
<Typography el="p">Call a contract read method with the active wagmi provider.</Typography>

<section class="mt-4">
	<Typography el="h2">Usage</Typography>
	<Syntax
		language="svelte"
		code={`<script>
    import { ContractRead } from "swagmi";
</script>

<Wagmi>
    {#snippet children({ connected, config })}
        {#if connected && wallet.address}
            <ContractRead
                functionName="balanceOf"
                args={[wallet.address]}
                address={CandorEarlyAccess.address}
                abi={CandorEarlyAccess.abi}
            >
                {#snippet children({ result, error, loading })}
                    {#if loading}
                        <div class="i-tabler-loader animate-spin"></div>
                    {:else if error}
                        <p class="text-red-500"><strong>Error:</strong> {error.message}</p>
                    {:else}
                        <p class="text-green-500">Balance: \${result}</p>
                    {/if}
                {/snippet}
            </ContractRead>
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
				<ContractRead
					functionName="balanceOf"
					args={[wallet.address]}
					address={CandorEarlyAccess.address}
					abi={CandorEarlyAccess.abi}
				>
					{#snippet children({ result, error, loading })}
						{#if loading}
							<div class="i-tabler-loader animate-spin"></div>
						{:else if error}
							<p class="text-red-500"><strong>Error:</strong> {error.message}</p>
						{:else}
							<p class="text-green-500">Balance: ${result}</p>
						{/if}
					{/snippet}
				</ContractRead>
			{:else if config}
				<ConnectButton />
			{:else}
				<LoadingIndicator>Loading client...</LoadingIndicator>
			{/if}
		{/snippet}
	</Wagmi>
</section>
