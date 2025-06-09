<script lang="ts">
	import type { Log } from 'viem';

	export let address: string;
	export let contract: any; // Contract interface from wagmi/viem
	export const map: Record<
		string,
		{
			label: string;
			scorer: (value: number) => number; // eslint-disable-line @typescript-eslint/no-unused-vars
			priority?: number;
		}
	> = {};

	// eslint-disable-next-line no-inner-declarations
	async function getUserAttestations(address: string) {
		// This will need to be updated to use viem's getLogs or contract event querying
		// The exact implementation depends on how the contract is configured in the parent component
		console.warn('getUserAttestations needs to be updated for viem usage');
		return [];
	}

	let attestations: Log[] = [];
	$: {
		getUserAttestations(address).then((logs) => {
			attestations = logs;
		});
		console.info('attestations', attestations);
	}
</script>
