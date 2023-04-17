import { get, writable } from 'svelte/store';
import {
	fetchBalance,
	fetchEnsAvatar,
	fetchEnsName,
	fetchSigner,
	getAccount,
	getNetwork,
	watchAccount,
	watchNetwork,
	watchSigner
} from '@wagmi/core';
import type * as ethers from 'ethers';
import wagmi from '$lib/wagmi/store';

export interface WalletStore {
	loading: boolean;
	mounted: boolean;
	connected: boolean;
	chainId?: number;
	signer?: ethers.Signer;
	address?: `0x${string}`;
	displayName?: string;
	avatar?: string;
}

export interface BalanceStore {
	value?: ethers.BigNumberish;
	formatted?: string;
}

export const wallet = writable<WalletStore>({
	loading: false,
	connected: false,
	mounted: false
});
export default wallet;

export const walletBalance = writable<BalanceStore>({});

export let walletBalanceInterval: NodeJS.Timeout | undefined;
export async function walletMount() {
	const _wallet = get(wallet);
	const _wagmi = get(wagmi);
	if (!_wagmi.client) {
		throw new Error('Called walletMount before wagmi client was ready');
	}
	if (_wallet.mounted || _wallet.loading) return () => undefined;
	wallet.update((w) => {
		w.loading = true;
		return w;
	});

	const account = getAccount();
	const signer = await fetchSigner();
	const network = getNetwork();

	const currentNetwork = await getNetwork();
	const currentAccount = await getAccount();
	wagmi.update((w) => {
		w.currentChain = currentNetwork.chain;
		return w;
	});
	wallet.update((w) => {
		w.address = currentAccount.address;
		w.connected = !!signer;
		w.signer = signer || undefined;
		w.chainId = currentNetwork.chain?.id;
		w.mounted = true;
		w.loading = false;
		return w;
	});

	let unwatchSigner: (() => void) | undefined;
	const unwatchNetwork = watchNetwork(async (network) => {
		wagmi.update((w) => {
			w.currentChain = network.chain;
			return w;
		});
		wallet.update((w) => {
			if (unwatchSigner) unwatchSigner();
			w.chainId = network.chain?.id;
			console.info('walletMount: network changed', network.chain?.id);
			if (network.chain) {
				fetchSigner().then((signer) => {
					wallet.update((w) => {
						w.connected = !!signer;
						w.signer = signer || undefined;
						return w;
					});
				});
				unwatchSigner = watchSigner({ chainId: network.chain.id }, (signer) => {
					console.info('walletMount: signer changed', !!signer);
					wallet.update((w) => {
						w.connected = !!signer;
						w.signer = signer || undefined;
						return w;
					});
				});
			}
			return w;
		});
	});

	const unwatch = watchAccount(async (account) => {
		const { address, isConnected } = account;
		wallet.update((w) => {
			w.address = address;
			w.connected = w.connected && isConnected;
			console.info('walletMount: account changed', address, isConnected);
			return w;
		});

		await fetchAccountDetails();
	});

	walletBalanceInterval = setInterval(async () => {
		const { address, chainId } = get(wallet);
		if (address) {
			const balance = await fetchBalance({ address, chainId });
			if (balance) {
				walletBalance.update((w) => {
					w.value = balance.value;
					w.formatted = balance.formatted;
					return w;
				});
			}
		}
	}, 5000);

	if (account) {
		wallet.update((w) => {
			w.mounted = true;
			w.loading = !account.isConnected;
			w.connected = account.isConnected && !!signer;
			w.address = account.address;
			w.chainId = network.chain?.id;
			fetchAccountDetails();
			return w;
		});
	}

	return () => {
		wallet.update((w) => {
			w.mounted = false;
			return w;
		});
		unwatch();
		unwatchNetwork();
		unwatchSigner?.();
		if (walletBalanceInterval) {
			clearInterval(walletBalanceInterval);
		}
	};
}

export async function fetchAccountDetails() {
	const { address, connected } = get(wallet);
	if (address && connected) {
		const displayName = await fetchEnsName({ address });
		if (displayName) {
			wallet.update((w) => {
				w.displayName = displayName;
				return w;
			});
		}
		const avatar = await fetchEnsAvatar({ address });
		if (avatar) {
			wallet.update((w) => {
				w.avatar = avatar;
				return w;
			});
		}
	}
}

export function disconnectWallet() {
	wallet.update((w) => {
		w.loading = false;
		w.connected = false;
		w.mounted = false;
		w.displayName = undefined;
		w.avatar = undefined;
		w.address = undefined;
		return w;
	});

	walletBalance.update((w) => {
		w.value = undefined;
		w.formatted = undefined;
		return w;
	});
}
