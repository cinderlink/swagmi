<script lang="ts">
	import { parseEther } from 'viem';
	import { Typography, Syntax, LoadingIndicator, Button } from '@cinderlink/ui-kit';
	import CandorEarlyAccess from '$lib/contracts/84531/contracts/CandorEarlyAccess';
	import { wallet } from '$lib/wallet/store.svelte';
	import Wagmi from '$lib/wagmi/Wagmi.svelte';
	import ContractWrite from '$lib/contract/ContractWrite.svelte';
	import ConnectButton from '$lib/wallet/ConnectButton.svelte';
	import Transaction from '$lib/transaction/Transaction.svelte';
</script>

<Typography>&lt;ContractWrite /&gt;</Typography>
<Typography el="p">Call a contract write method with the active wagmi provider.</Typography>

<section class="mt-4">
	<Typography el="h2">Usage</Typography>
	<Syntax
		language="svelte"
		code={`<script>
    import { ContractWrite } from "swagmi";
</script>

<Wagmi let:connected let:client>
    {#if connected && wallet.address}
        <ContractWrite
            method="mint"
            args={[wallet.address]}
            value="0.01"
            address={CandorEarlyAccess.address}
            abi={CandorEarlyAccess.abi}
            let:run
            let:result
        >
            {#if result}
                <p class="text-green-500">Mint response: {result}</p>
            {:else}
                <Button on:click={run}>Mint</Button>
            {/if}
            <p class="text-red-500" slot="error" let:error><strong>Error:</strong> {error.message}</p>
        </ContractWrite>
    {:else if client}
        <ConnectButton />
    {:else}
        <LoadingIndicator>Loading client...</LoadingIndicator>
    {/if}
</Wagmi>`}
	/>
</section>

<section class="mt-4">
	<Typography el="h4">Output</Typography>
	<Wagmi let:connected let:client>
		{#if connected && wallet.address}
			<ContractWrite
				method="mint"
				args={[wallet.address]}
				value={parseEther('0.01')}
				address={CandorEarlyAccess.address}
				abi={CandorEarlyAccess.abi}
				let:run
				let:result
			>
				<svelte:fragment slot="tx" let:tx>
					<Transaction {tx} />
				</svelte:fragment>
				{#if result}
					<Transaction receipt={result} />
				{:else}
					<Button on:click={run}>Mint</Button>
				{/if}
				<p class="text-red-500" slot="error" let:error><strong>Error:</strong> {error.message}</p>
			</ContractWrite>
		{:else if client}
			<ConnectButton />
		{:else}
			<LoadingIndicator>Loading client...</LoadingIndicator>
		{/if}
	</Wagmi>
</section>
