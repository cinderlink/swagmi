import { createConfig, http, type Config } from '@wagmi/core';
import { coinbaseWallet, injected, walletConnect, safe } from '@wagmi/connectors';
import { baseGoerli, foundry } from '@wagmi/core/chains';
import type { Chain } from '@wagmi/core/chains';

import { env } from '$env/dynamic/public';

export interface WagmiStore {
	loading: boolean;
	connected: boolean;
	config?: Config;
	chains: Chain[];
}

class WagmiState {
	state = $state<WagmiStore>({
		loading: false,
		connected: false,
		chains: []
	});
	
	get loading() {
		return this.state.loading;
	}
	
	get connected() {
		return this.state.connected;
	}
	
	get config() {
		return this.state.config;
	}
	
	get chains() {
		return this.state.chains;
	}
	
	update(updater: (current: WagmiStore) => WagmiStore) {
		this.state = updater(this.state);
	}
	
	set(newState: WagmiStore) {
		this.state = newState;
	}
}

export const wagmi = new WagmiState();

let mounted = false;
export async function load({
	chains = [baseGoerli, foundry],
	projectId,
	appName = 'swagmi'
}: {
	chains?: Chain[];
	projectId?: string;
	appName?: string;
} = {}) {
	if (mounted) return;
	mounted = true;

	wagmi.update((w) => {
		w.loading = true;
		return w;
	});

	// Setup transports for each chain
	const transports: Record<number, ReturnType<typeof http>> = {};
	for (const chain of chains) {
		if (env.PUBLIC_WAGMI_RPC_URL && chain.id === baseGoerli.id) {
			transports[chain.id] = http(env.PUBLIC_WAGMI_RPC_URL);
		} else {
			transports[chain.id] = http();
		}
	}

	// Setup connectors
	const connectors = [
		injected(),
		walletConnect({
			projectId: projectId || env.PUBLIC_WALLETCONNECT_PROJECT_ID || ''
		}),
		coinbaseWallet({
			appName
		}),
		safe({
			allowedDomains: env.PUBLIC_WAGMI_ALLOWED_DOMAINS?.length
				? env.PUBLIC_WAGMI_ALLOWED_DOMAINS.split(',').map((pattern) => new RegExp(pattern))
				: [/localhost$/, /.*\.cinderlink\.com$/, /.*\.candor\.social$/]
		})
	];

	const config = createConfig({
		chains,
		connectors,
		transports
	});

	wagmi.update((current) => ({
		...current,
		loading: false,
		connected: true,
		config,
		chains
	}));

	return config;
}

export function disconnect() {
	wagmi.update((w) => {
		w.config = undefined;
		w.connected = false;
		return w;
	});
}

export default wagmi;