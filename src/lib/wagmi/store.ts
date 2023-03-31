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

import { env } from '$env/dynamic/public';

export interface WagmiStore {
	loading: boolean;
	connected: boolean;
	currentChain?: Chain;
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
	currentChain,
	connectors,
	infuraApiKey,
	alchemyApiKey,
	projectId
}: {
	chains?: Chain[];
	currentChain?: Chain;
	rpc?: { http: string; webSocket?: string };
	projectId?: string;
	connectors?: Connector[];
	infuraApiKey?: string;
	alchemyApiKey?: string;
} = {}) {
	if (mounted) return;
	mounted = true;
	wagmi.update((w) => {
		w.loading = true;
		w.currentChain = currentChain;
		return w;
	});
	const { configureChains } = await import('@wagmi/core');
	const providers: ChainProviderFn[] = [];
	if (rpc) {
		const { jsonRpcProvider } = await import('@wagmi/core/providers/jsonRpc');
		providers.push(
			jsonRpcProvider({
				rpc: () => rpc
			})
		);
	}
	if (env.PUBLIC_WAGMI_RPC_URL?.length) {
		const { jsonRpcProvider } = await import('@wagmi/core/providers/jsonRpc');
		providers.push(
			jsonRpcProvider({
				rpc: () => ({
					http: env.PUBLIC_WAGMI_RPC_URL,
					webSocket: env.PUBLIC_WAGMI_RPC_WS_URL
				})
			})
		);
	}
	if (infuraApiKey) {
		const { infuraProvider } = await import('@wagmi/core/providers/infura');
		providers.push(
			infuraProvider({
				apiKey: infuraApiKey
			})
		);
	}
	if (alchemyApiKey) {
		const { alchemyProvider } = await import('@wagmi/core/providers/alchemy');
		providers.push(
			alchemyProvider({
				apiKey: alchemyApiKey
			})
		);
	}
	const { publicProvider } = await import('@wagmi/core/providers/public');
	providers.push(publicProvider());

	const allChains = await import('@wagmi/core/chains');
	const {
		chains: clientChains,
		provider,
		webSocketProvider
	} = await configureChains(chains || [allChains.baseGoerli, allChains.foundry], providers);

	if (!connectors) {
		const { CoinbaseWalletConnector } = await import('@wagmi/core/connectors/coinbaseWallet');
		const { LedgerConnector } = await import('@wagmi/core/connectors/ledger');
		const { MetaMaskConnector } = await import('@wagmi/core/connectors/metaMask');
		const { SafeConnector } = await import('@wagmi/core/connectors/safe');

		connectors = [
			...w3mConnectors({
				chains: clientChains,
				projectId: projectId || env.PUBLIC_WALLETCONNECT_PROJECT_ID,
				version: 2
			}),
			new CoinbaseWalletConnector({
				options: {
					appName: 'swagmi'
				}
			}),
			new LedgerConnector(),
			new MetaMaskConnector(),
			new SafeConnector({
				options: {
					allowedDomains: env.PUBLIC_WAGMI_ALLOWED_DOMAINS?.length
						? env.PUBLIC_WAGMI_ALLOWED_DOMAINS?.split(',').map((pattern) => new RegExp(pattern))
						: [/localhost$/, /.*\.cinderlink\.com$/, /.*\.candor\.social$/]
				}
			})
		];
	}

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
		currentChain: currentChain || clientChains[0],
		chains: clientChains,
		client
	}));
}

export function disconnect() {
	wagmi.update((w) => {
		w.client?.destroy();
		w.client = undefined;
		w.connected = false;
		return w;
	});
}
