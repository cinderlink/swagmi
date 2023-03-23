import { get, writable } from 'svelte/store';
import {
	fetchBalance,
	fetchEnsAvatar,
	fetchEnsName,
	watchAccount,
	type FetchBalanceResult
} from '@wagmi/core';

export interface WalletStore {
	loading: boolean;
	mounted: boolean;
	connected: boolean;
	address?: `0x${string}`;
	balance?: FetchBalanceResult;
	balanceFormatted?: string;
	displayName?: string;
	avatar?: string;
}

export const wallet = writable<WalletStore>({
	loading: false,
	connected: false,
	mounted: false
});

export let walletBalanceInterval: NodeJS.Timeout | undefined;
export function walletMount() {
	const { mounted } = get(wallet);
	if (mounted) return () => undefined;
	wallet.update((w) => {
		w.mounted = true;
		w.loading = true;
		return w;
	});
	const unwatch = watchAccount(async (account) => {
		const { address, isConnected } = account;
		wallet.update((w) => {
			console.info('walletMount', { address, isConnected });
			w.loading = !isConnected;
			w.connected = isConnected;
			w.address = address;
			return w;
		});

		if (address && isConnected) {
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

		wallet.update((w) => {
			w.loading = false;
			return w;
		});
	});
	walletBalanceInterval = setInterval(async () => {
		const { address } = get(wallet);
		if (address) {
			const balance = await fetchBalance({ address });
			if (balance) {
				wallet.update((w) => {
					w.balance = balance;
					return w;
				});
			}
		}
	}, 5000);

	return () => {
		wallet.update((w) => {
			w.mounted = false;
			return w;
		});
		unwatch();
		if (walletBalanceInterval) {
			clearInterval(walletBalanceInterval);
		}
	};
}

export function disconnectWallet() {
	wallet.update((w) => {
		w.loading = false;
		w.connected = false;
		w.mounted = false;
		w.balance = undefined;
		w.balanceFormatted = undefined;
		w.displayName = undefined;
		w.avatar = undefined;
		w.address = undefined;
		return w;
	});
}
