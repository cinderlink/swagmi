<script lang="ts">
	import { Typography } from '@cinderlink/ui-kit/content';
	import { Syntax } from '@cinderlink/ui-kit/markup';
	import { LoadingIndicator } from '@cinderlink/ui-kit/indicator';
	import { CandorEarlyAccess } from '$lib/registry/contracts';
	import wallet from '$lib/wallet/store';
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
    import { Contract } from "swagmi";
</script>

<Wagmi let:connected let:client>
    {#if connected && $wallet.address}
        <ContractRead
            method="balanceOf"
            args={[$wallet.address]}
            address={CandorEarlyAccess.address}
            abi={CandorEarlyAccess.abi}
            let:result
        >
            <p class="text-green-500">Balance: \${result}</p>
            <p class="text-red-500" slot="error" let:error><strong>Error:</strong> {error}</p>
        </ContractRead>
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
		{#if connected && $wallet.address}
			<ContractRead
				method="balanceOf"
				args={[$wallet.address]}
				address={CandorEarlyAccess.address}
				abi={CandorEarlyAccess.abi}
				let:result
			>
				<p class="text-green-500">Balance: ${result}</p>
				<p class="text-red-500" slot="error" let:error><strong>Error:</strong> {error}</p>
			</ContractRead>
		{:else if client}
			<ConnectButton />
		{:else}
			<LoadingIndicator>Loading client...</LoadingIndicator>
		{/if}
	</Wagmi>
</section>
