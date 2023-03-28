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
export async function load(
	{
		rpc,
		chains,
		chainId,
		connectors,
		projectId
	}: {
		chains: string[];
		chainId: number;
		rpc?: { http: string; webSocket?: string };
		projectId?: string;
		connectors?: Connector[];
	} = {
		chains: env.PUBLIC_WAGMI_CHAINS?.length ? env.PUBLIC_WAGMI_CHAINS.split(',') : ['forge'],
		chainId: env.PUBLIC_WAGMI_DEFAULT_CHAIN_ID?.length
			? parseInt(env.PUBLIC_WAGMI_DEFAULT_CHAIN_ID)
			: 31337
	}
) {
	if (mounted) return;
	mounted = true;
	wagmi.update((w) => {
		w.loading = true;
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
	} else if (env.PUBLIC_WAGMI_RPC_URL?.length) {
		const { jsonRpcProvider } = await import('@wagmi/core/providers/jsonRpc');
		providers.push(
			jsonRpcProvider({
				rpc: () => ({
					http: env.PUBLIC_WAGMI_RPC_URL,
					webSocket: env.PUBLIC_WAGMI_RPC_WS_URL
				})
			})
		);
	} else {
		const { publicProvider } = await import('@wagmi/core/providers/public');
		providers.push(publicProvider());
	}

	const supportedChains = await loadChains(chains);

	if (!connectors) {
		const { CoinbaseWalletConnector } = await import('@wagmi/core/connectors/coinbaseWallet');
		const { LedgerConnector } = await import('@wagmi/core/connectors/ledger');
		const { MetaMaskConnector } = await import('@wagmi/core/connectors/metaMask');
		const { SafeConnector } = await import('@wagmi/core/connectors/safe');

		connectors = [
			...w3mConnectors({
				chains: supportedChains,
				projectId: projectId || env.PUBLIC_WALLETCONNECT_PROJECT_ID,
				version: 2
			}),
			new CoinbaseWalletConnector({
				options: {
					appName: 'swagmi',
					jsonRpcUrl: env.PUBLIC_WAGMI_RPC_URL?.length
						? env.PUBLIC_WAGMI_RPC_URL
						: 'http://localhost:8545',
					chainId
				}
			}),
			new LedgerConnector(),
			new MetaMaskConnector(),
			new SafeConnector({
				options: {
					allowedDomains: env.PUBLIC_WAGMI_ALLOWED_DOMAINS?.length
						? env.PUBLIC_WAGMI_ALLOWED_DOMAINS?.split(',').map((pattern) => new RegExp(pattern))
						: [/localhost:3000$/, /swagmi\.cinderlink\.com$/]
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

export async function loadChains(names: string[]) {
	const chains = await import('@wagmi/core/chains');
	const loadedChains = names
		.map((name) => {
			if (chains[name as keyof typeof chains]) {
				return chains[name as keyof typeof chains];
			}
		})
		.filter(Boolean) as Chain[];
	return loadedChains;
}

export function disconnect() {
	wagmi.update((w) => {
		w.client?.destroy();
		w.client = undefined;
		w.connected = false;
		return w;
	});
}
