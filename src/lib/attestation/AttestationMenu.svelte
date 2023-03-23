<script lang="ts">
	import { LoadingIndicator, Button, Dropdown, List, theme } from '@cinderlink/ui-kit';
	import type { Size } from '@cinderlink/ui-kit';
	import * as ethers from 'ethers';
	import { getProvider, fetchSigner } from '@wagmi/core';

	export let address: string;
	export let label: string;
	export let size: Size;
	export let align: 'left' | 'right' = 'left';

	export let contract: ethers.Contract;

	interface AttestationOption {
		key: string;
		label: string;
		value?: number;
		valueFn?: (address: string) => number;
	}

	export let options: AttestationOption[] = [];

	let attesting = false;
	let error: string | undefined = undefined;
	let success: boolean = false;

	function encodeRawKey(key: string) {
		if (key.length < 32) return ethers.utils.formatBytes32String(key);

		const hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(key));
		return hash.slice(0, 64) + 'ff';
	}

	async function selectAttestationOption(option: AttestationOption) {
		if (!contract) {
			error = 'No AttestationStation contract found';
			return;
		}

		const provider = getProvider();
		if (!provider) {
			console.warn(`swagmi/AttestationMenu: No RPC provider found`);
			error = 'No RPC provider found';
			return;
		}

		const signer = await fetchSigner();
		if (!signer) {
			error = 'No signer found';
			return;
		}

		attesting = true;
		error = undefined;
		success = false;

		const tx = await contract.attest([
			{
				about: address,
				key: encodeRawKey(option.key),
				val: option.value ?? option.valueFn?.(address)
			}
		]);
		const receipt = await tx.wait();
		console.info('receipt', receipt);
		attesting = false;
	}
</script>

{#if success}
	<div class="p-4 rounded-md bg-green-500 text-green-900">
		<strong>Success!</strong>
		<p>Attestation sent</p>
	</div>
{:else if error}
	<div class="p-4 rounded-md bg-red-500 text-red-900">
		<strong>Error!</strong>
		<p>{error}</p>
	</div>
{/if}

{#if attesting}
	<LoadingIndicator>Submitting feedback...</LoadingIndicator>
{:else}
	<Dropdown id={`attestation-dropdown-${address}`} {label} {size} {align} {...$$restProps}>
		<List variant={$theme.darkMode ? 'dark' : 'light'} size="sm">
			{#each options as option}
				<Button
					classes="whitespace-nowrap"
					on:click={() => selectAttestationOption(option)}
					size="sm"
				>
					{option.label}
				</Button>
			{/each}
		</List>
	</Dropdown>
{/if}
