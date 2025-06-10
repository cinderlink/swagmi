import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the env module before importing the store
vi.mock('$env/dynamic/public', () => ({
  env: {
    PUBLIC_WALLET_CONNECT_PROJECT_ID: 'test-project-id'
  }
}));

// Now import the store after mocking
const { wagmi } = await import('./store.svelte');

describe('wagmi store', () => {
  beforeEach(() => {
    // Reset store state
    wagmi.set({
      loading: false,
      connected: false,
      chains: []
    });
  });

  it('has initial state', () => {
    expect(wagmi.loading).toBe(false);
    expect(wagmi.connected).toBe(false);
    expect(wagmi.chains).toEqual([]);
  });

  it('can update state', () => {
    wagmi.update(state => ({
      ...state,
      loading: true,
      connected: true
    }));

    expect(wagmi.loading).toBe(true);
    expect(wagmi.connected).toBe(true);
  });

  it('can set state directly', () => {
    wagmi.set({
      loading: true,
      connected: true,
      chains: [],
      config: undefined
    });

    expect(wagmi.loading).toBe(true);
    expect(wagmi.connected).toBe(true);
  });

  it('maintains chains array', () => {
    const chains = [{ id: 1, name: 'mainnet' }];
    wagmi.update(state => ({
      ...state,
      chains: chains as any
    }));

    expect(wagmi.chains).toEqual(chains);
  });
});