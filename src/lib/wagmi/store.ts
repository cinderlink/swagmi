import {
	Client,
	Connector,
	createClient,
	type Chain,
	type ChainProviderFn,
	type Provider,
	type WebSocketProvider
} from '@wagmi/core';
import { writable } from 'svelte/store';
import { w3mConnectors } from '@web3modal/ethereum';

let RPC_URL = import.meta.env.RPC_URL || import.meta.env.VITE_RPC_URL;
let RPC_WS_URL = import.meta.env.RPC_WS_URL || import.meta.env.VITE_RPC_WS_URL;
let WALLETCONNECT_PROJECT_ID =
	import.meta.env.WALLETCONNECT_PROJECT_ID || import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

export function setRpcUrl(url: string) {
	RPC_URL = url;
}

export function setRpcWsUrl(url: string) {
	RPC_WS_URL = url;
}

export function setWalletConnectProjectId(id: string) {
	WALLETCONNECT_PROJECT_ID = id;
}

export interface WagmiStore {
	loading: boolean;
	connected: boolean;
	currentChain?: string;
	chains?: Chain[];
	client?: Client<Provider, WebSocketProvider>;
}

export const wagmi = writable<WagmiStore>({
	loading: false,
	connected: false
});

export default wagmi;

let mounted = false;
export async function load({
	rpc,
	chains,
	connectors
}: {
	rpc?: { http: string; webSocket?: string };
	chains?: Chain[];
	connectors?: Connector[];
} = {}) {
	if (mounted) return;
	mounted = true;
	console.info('rpc url?', RPC_URL);
	wagmi.update((w) => {
		w.loading = true;
		return w;
	});
	console.info('importing wagmi');
	const { configureChains } = await import('@wagmi/core');
	const providers: ChainProviderFn[] = [];
	let supportedChains: Chain[] = [];
	console.info('configuring rpc');
	if (rpc) {
		console.info('RPC', rpc);
		const { jsonRpcProvider } = await import('@wagmi/core/providers/jsonRpc');
		providers.push(
			jsonRpcProvider({
				rpc: () => rpc
			})
		);
	} else if (RPC_URL) {
		console.info('RPC_URL', RPC_URL);
		const { jsonRpcProvider } = await import('@wagmi/core/providers/jsonRpc');
		providers.push(
			jsonRpcProvider({
				rpc: () => ({
					http: RPC_URL,
					webSocket: RPC_WS_URL
				})
			})
		);
	} else {
		console.info('public provider', RPC_URL);
		const { publicProvider } = await import('@wagmi/core/providers/public');
		providers.push(publicProvider());
	}

	if (!chains) {
		supportedChains = await loadDefaultChains();
	}

	if (!connectors) {
		const { CoinbaseWalletConnector } = await import('@wagmi/core/connectors/coinbaseWallet');
		const { LedgerConnector } = await import('@wagmi/core/connectors/ledger');
		const { MetaMaskConnector } = await import('@wagmi/core/connectors/metaMask');
		const { SafeConnector } = await import('@wagmi/core/connectors/safe');

		connectors = [
			...w3mConnectors({
				chains: supportedChains,
				projectId: WALLETCONNECT_PROJECT_ID,
				version: 2
			}),
			new CoinbaseWalletConnector({
				options: {
					appName: 'swagmi',
					jsonRpcUrl: RPC_URL || 'http://localhost:8545'
				}
			}),
			new LedgerConnector(),
			new MetaMaskConnector(),
			new SafeConnector({
				options: {
					allowedDomains: [/localhost:3000$/, /swagmi\.cinderlink\.com$/]
				}
			})
		];
	}

	const {
		chains: clientChains,
		provider,
		webSocketProvider
	} = await configureChains(supportedChains, providers);

	const client = createClient<Provider, WebSocketProvider>({
		autoConnect: true,
		provider,
		connectors,
		webSocketProvider
	});

	wagmi.update((current) => ({
		...current,
		loading: false,
		connected: true,
		currentChain: clientChains[0].name,
		chains: clientChains,
		client
	}));
}

export async function loadDefaultChains() {
	const chains = await import('@wagmi/core/chains');
	const defaultChains: Chain[] = [chains.mainnet, chains.polygon, chains.optimism, chains.arbitrum];
	if (import.meta.env.DEV) {
		defaultChains.push(chains.foundry, chains.sepolia, chains.optimismGoerli, chains.baseGoerli);
	}
	return defaultChains;
}

export function disconnect() {
	wagmi.update((w) => {
		w.client?.destroy();
		w.client = undefined;
		w.connected = false;
		return w;
	});
}
