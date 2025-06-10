import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock wagmi store module
vi.mock('$lib/wagmi/store.svelte', () => ({
	wagmi: {
		state: {
			config: undefined
		}
	}
}));

// Mock wagmi core functions
vi.mock('@wagmi/core', () => ({
	getAccount: vi.fn(() => ({ address: undefined, isConnected: false })),
	getChainId: vi.fn(() => 1),
	getBalance: vi.fn(),
	getEnsName: vi.fn(),
	getEnsAvatar: vi.fn(),
	watchAccount: vi.fn(() => vi.fn()),
	watchChainId: vi.fn(() => vi.fn()),
	connect: vi.fn(),
	disconnect: vi.fn()
}));

// Mock viem
vi.mock('viem', () => ({
	formatEther: vi.fn((value) => String(value))
}));

// Import wallet store after mocks
const { wallet, walletBalance } = await import('./store.svelte');

describe('wallet store', () => {
	beforeEach(() => {
		// Reset store state
		wallet.set({
			loading: false,
			connected: false,
			mounted: false,
			connecting: false,
			chainId: undefined,
			address: undefined,
			displayName: undefined,
			avatar: undefined
		});

		walletBalance.set({
			value: undefined,
			formatted: undefined
		});
	});

	it('has initial state', () => {
		expect(wallet.loading).toBe(false);
		expect(wallet.connected).toBe(false);
		expect(wallet.mounted).toBe(false);
		expect(wallet.connecting).toBe(false);
		expect(wallet.chainId).toBeUndefined();
		expect(wallet.address).toBeUndefined();
		expect(wallet.displayName).toBeUndefined();
		expect(wallet.avatar).toBeUndefined();
	});

	it('can update state', () => {
		wallet.update((state) => ({
			...state,
			loading: true,
			connected: true,
			address: '0x123' as `0x${string}`
		}));

		expect(wallet.loading).toBe(true);
		expect(wallet.connected).toBe(true);
		expect(wallet.address).toBe('0x123');
	});

	it('can set state directly', () => {
		wallet.set({
			loading: true,
			connected: true,
			mounted: true,
			connecting: false,
			chainId: 1,
			address: '0xabc' as `0x${string}`,
			displayName: 'test.eth',
			avatar: 'avatar.png'
		});

		expect(wallet.loading).toBe(true);
		expect(wallet.connected).toBe(true);
		expect(wallet.mounted).toBe(true);
		expect(wallet.chainId).toBe(1);
		expect(wallet.address).toBe('0xabc');
		expect(wallet.displayName).toBe('test.eth');
		expect(wallet.avatar).toBe('avatar.png');
	});
});

describe('walletBalance store', () => {
	it('has initial state', () => {
		expect(walletBalance.value).toBeUndefined();
		expect(walletBalance.formatted).toBeUndefined();
	});

	it('can update balance', () => {
		walletBalance.update((state) => ({
			...state,
			value: BigInt(1000000000000000000),
			formatted: '1.0'
		}));

		expect(walletBalance.value).toBe(BigInt(1000000000000000000));
		expect(walletBalance.formatted).toBe('1.0');
	});
});
