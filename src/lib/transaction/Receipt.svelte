<script lang="ts">
	import { Panel, LoadingIndicator } from '@cinderlink/ui-kit';
	import { formatGwei } from 'viem';

	let { explorerUrl = undefined, receipt = undefined }: {
		explorerUrl?: string;
		receipt?: any;
	} = $props();
</script>

{#if receipt}
	<Panel>
		<div class="details">
			<div class="variable">Status</div>
			<div class="value">{receipt.status === 'success' ? 'Success' : 'Failed'}</div>
			<div class="variable">Gas Used</div>
			<div class="value">{receipt.gasUsed ? formatGwei(receipt.gasUsed) : 'N/A'}</div>
			<div class="variable">Cumulative Gas Used</div>
			<div class="value">
				{receipt.cumulativeGasUsed ? formatGwei(receipt.cumulativeGasUsed) : 'N/A'}
			</div>
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
					<div class="i-tabler-map"></div>
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
