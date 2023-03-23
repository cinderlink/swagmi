import { EthereumClient } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/html';
import { writable, get } from 'svelte/store';
import wagmi, { loadDefaultChains } from '$lib/wagmi/store';

export interface ModalStore {
	loading: boolean;
	modal?: Web3Modal;
}

export const web3modal = writable<ModalStore>({
	loading: false,
	modal: undefined as Web3Modal | undefined
});
export default web3modal;

let mounted = false;
export async function loadModal(projectId = 'swagmi') {
	const state = get(wagmi);
	if (mounted) return;
	mounted = true;
	console.info('loading modal');

	web3modal.update((w) => {
		w.loading = true;
		return w;
	});

	const chains = state.chains || (await loadDefaultChains());
	const ethereumClient = new EthereumClient(state.client, chains);
	const w3m = new Web3Modal({ projectId }, ethereumClient);
	web3modal.update((w) => {
		w.modal = w3m;
		w.loading = false;
		return w;
	});
}
