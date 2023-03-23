# swagmi

Svelte primitives for working with wagmi and ethers.

## Installation

```bash
pnpm add swagmi ethers@^5
```

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
