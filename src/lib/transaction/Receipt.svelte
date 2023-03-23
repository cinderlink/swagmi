<script lang="ts">
	import { Panel, LoadingIndicator } from '@cinderlink/ui-kit';
	export let explorerUrl: string | undefined = undefined;
	import type { ContractReceipt } from 'ethers';
	import * as ethers from 'ethers';
	export let receipt: ContractReceipt | undefined = undefined;
</script>

{#if receipt}
	<Panel>
		<div class="details">
			<div class="variable">Status</div>
			<div class="value">{receipt.status ? 'Success' : 'Failed'}</div>
			<div class="variable">Confirmations</div>
			<div class="value">{receipt.confirmations}</div>
			<div class="variable">Gas Used</div>
			<div class="value">{ethers.utils.formatUnits(receipt.gasUsed)}</div>
			<div class="variable">Cumulative Gas Used</div>
			<div class="value">{ethers.utils.formatUnits(receipt.cumulativeGasUsed)}</div>
			<div class="variable">Block Hash</div>
			<div class="value">{receipt.blockHash}</div>
			<div class="variable">Block Number</div>
			<div class="value">{receipt.blockNumber}</div>
			<div class="variable">Transaction Hash</div>
			<div class="value">
				<a
					href={explorerUrl ? `${explorerUrl}/tx/${receipt.transactionHash}` : '#'}
					class="text-purple-200 flex items-center gap-2"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="i-tabler-map" />
					{receipt.transactionHash}
				</a>
			</div>
			<div class="variable">Transaction Index</div>
			<div class="value">{receipt.transactionIndex}</div>
		</div>
	</Panel>
{:else}
	<LoadingIndicator />
{/if}

<style>
	.details {
		@apply grid grid-cols-6 gap-4;
	}
	.variable {
		@apply col-span-1 font-bold text-right text-purple-600 dark-(text-blue-200);
	}
	.value {
		@apply col-span-5;
	}
</style>
