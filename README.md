# swagmi

Svelte 5 primitives for working with wagmi and viem.

## Installation

### Latest stable version

```bash
pnpm add swagmi
```

### Next version (Svelte 5 with runes)

```bash
pnpm add swagmi@next
```

## Requirements

- Svelte 5+
- @cinderlink/ui-kit@next (1.0.0-next.0 or higher)
- wagmi v2
- viem (replaces ethers)

## Usage

```svelte
<script>
    import { Wagmi, Wallet, NFT, ConnectButton, ContractRead, ContractWrite, wallet, wagmi } from 'swagmi';
</script>

<Wagmi let:connected let:wagmi>
    {#if !connected}
        <ConnectButton />
    {:else}
        <Wallet let:wallet>
            <!-- Read NFT asset from Opensea API (default) -->
            <NFT source="opensea" contract={nftContractAddress} tokenId={tokenId} let:nft>
                <img src={nft.image_url} />
            </NFT>

            <!-- Read NFT tokenUri from contract -->
            <NFT source="contract" contract={nftContractAddress} abi={nftContractAbi} tokenId={tokenId} let:nft>
                <img src={nft.image_url} />
            </NFT>


            <ContractRead address={tokenContract} method="balanceOf" args={[$wallet.address]} let:result>
                <p>Balance: {result}</p>
            </ContractRead>

            <ContractWrite address={nftContract} method="mint" args={[$wallet.address]} value="0.01" let:tx let:result>
                {#if result}
                    <Receipt receipt={result} />
                {:else if tx}
                    <Transaction {tx}>
                {/if}
                <p class="text-red-500" slot="error" let:error>{error.message}</p>
            </ContractWrite>
        </Wallet>
    {/if}
</Wagmi>
```
