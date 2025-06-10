import {
	getAccount,
	getChainId,
	getBalance,
	getEnsName,
	getEnsAvatar,
	watchAccount,
	watchChainId,
	connect,
	disconnect as wagmiDisconnect
} from '@wagmi/core';
import { formatEther } from 'viem';
import { wagmi } from '$lib/wagmi/store.svelte';

export interface WalletStore {
	loading: boolean;
	mounted: boolean;
	connected: boolean;
	connecting: boolean;
	chainId?: number;
	address?: `0x${string}`;
	displayName?: string;
	avatar?: string;
}

export interface BalanceStore {
	value?: bigint;
	formatted?: string;
}

class WalletState {
	state = $state<WalletStore>({
		loading: false,
		connected: false,
		mounted: false,
		connecting: false
	});

	get loading() {
		return this.state.loading;
	}

	get mounted() {
		return this.state.mounted;
	}

	get connected() {
		return this.state.connected;
	}

	get connecting() {
		return this.state.connecting;
	}

	get chainId() {
		return this.state.chainId;
	}

	get address() {
		return this.state.address;
	}

	get displayName() {
		return this.state.displayName;
	}

	get avatar() {
		return this.state.avatar;
	}

	update(updater: (current: WalletStore) => WalletStore) {
		this.state = updater(this.state);
	}

	set(newState: WalletStore) {
		this.state = newState;
	}
}

class WalletBalanceState {
	state = $state<BalanceStore>({});

	get value() {
		return this.state.value;
	}

	get formatted() {
		return this.state.formatted;
	}

	update(updater: (current: BalanceStore) => BalanceStore) {
		this.state = updater(this.state);
	}

	set(newState: BalanceStore) {
		this.state = newState;
	}
}

export const wallet = new WalletState();
export const walletBalance = new WalletBalanceState();

export let walletBalanceInterval: NodeJS.Timeout | undefined;

export async function walletMount() {
	const _wallet = wallet.state;
	const _wagmi = wagmi.state;
	if (!_wagmi.config) {
		throw new Error('Called walletMount before wagmi config was ready');
	}
	if (_wallet.mounted || _wallet.loading) return () => undefined;

	wallet.update((w) => {
		w.loading = true;
		return w;
	});

	// Get initial state
	const account = getAccount(_wagmi.config);
	const chainId = getChainId(_wagmi.config);

	wallet.update((w) => {
		w.address = account.address;
		w.connected = account.isConnected;
		w.chainId = chainId;
		w.mounted = true;
		w.loading = false;
		return w;
	});

	// Watch for account changes
	const unwatchAccount = watchAccount(_wagmi.config, {
		onChange: async (account) => {
			wallet.update((w) => {
				w.address = account.address;
				w.connected = account.isConnected;
				w.connecting = account.isConnecting;
				console.info('walletMount: account changed', account.address, account.isConnected);
				return w;
			});

			if (account.address && account.isConnected) {
				await fetchAccountDetails();
			}
		}
	});

	// Watch for chain changes
	const unwatchChainId = watchChainId(_wagmi.config, {
		onChange: (chainId) => {
			wallet.update((w) => {
				w.chainId = chainId;
				console.info('walletMount: chain changed', chainId);
				return w;
			});
		}
	});

	// Setup balance polling
	walletBalanceInterval = setInterval(async () => {
		const { address, chainId } = wallet.state;
		const { config } = wagmi.state;
		if (address && config) {
			try {
				const balance = await getBalance(config, { address, chainId });
				walletBalance.update((w) => {
					w.value = balance.value;
					w.formatted = formatEther(balance.value);
					return w;
				});
			} catch (error) {
				console.warn('Failed to fetch balance:', error);
			}
		}
	}, 5000);

	// Initial fetch if already connected
	if (account.address && account.isConnected) {
		await fetchAccountDetails();
	}

	return () => {
		wallet.update((w) => {
			w.mounted = false;
			return w;
		});
		unwatchAccount();
		unwatchChainId();
		if (walletBalanceInterval) {
			clearInterval(walletBalanceInterval);
		}
	};
}

export async function fetchAccountDetails() {
	const { address, connected } = wallet.state;
	const { config } = wagmi.state;
	if (address && connected && config) {
		try {
			const displayName = await getEnsName(config, { address });
			if (displayName) {
				wallet.update((w) => {
					w.displayName = displayName;
					return w;
				});
			}
		} catch (error) {
			console.warn('Failed to fetch ENS name:', error);
		}

		try {
			const avatar = await getEnsAvatar(config, { name: address });
			if (avatar) {
				wallet.update((w) => {
					w.avatar = avatar;
					return w;
				});
			}
		} catch (error) {
			console.warn('Failed to fetch ENS avatar:', error);
		}
	}
}

export async function connectWallet(connectorId?: string) {
	const { config } = wagmi.state;
	if (!config) return;

	wallet.update((w) => {
		w.connecting = true;
		return w;
	});

	try {
		const connector = connectorId
			? config.connectors.find((c) => c.id === connectorId)
			: config.connectors[0];

		if (connector) {
			await connect(config, { connector });
		}
	} catch (error) {
		console.error('Failed to connect wallet:', error);
	} finally {
		wallet.update((w) => {
			w.connecting = false;
			return w;
		});
	}
}

export async function disconnectWallet() {
	const { config } = wagmi.state;
	if (!config) return;

	try {
		await wagmiDisconnect(config);
	} catch (error) {
		console.error('Failed to disconnect wallet:', error);
	}

	wallet.update((w) => {
		w.loading = false;
		w.connected = false;
		w.connecting = false;
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

export default wallet;
