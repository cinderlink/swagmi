import { render } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Wagmi from './Wagmi.svelte';
import { wagmi } from './store.svelte';

// Mock the wagmi core module
vi.mock('@wagmi/core', () => ({
  createConfig: vi.fn(() => ({ 
    id: 'test-config',
    connectors: [],
    chains: []
  })),
  watchAccount: vi.fn(() => vi.fn()),
  watchNetwork: vi.fn(() => vi.fn()),
  getAccount: vi.fn(() => ({ address: undefined, isConnected: false })),
  getNetwork: vi.fn(() => ({ chain: undefined })),
  http: vi.fn(() => ({}))
}));

// Mock wallet mount
vi.mock('$lib/wallet/store.svelte', () => ({
  walletMount: vi.fn(() => () => {}),
  wallet: {
    state: {},
    update: vi.fn(),
    set: vi.fn()
  },
  walletBalance: {
    state: {},
    update: vi.fn(),
    set: vi.fn()
  }
}));

// Mock connectors
vi.mock('@wagmi/connectors', () => ({
  injected: vi.fn(() => ({ id: 'injected', name: 'Injected' })),
  walletConnect: vi.fn(() => ({ id: 'walletConnect', name: 'WalletConnect' })),
  coinbaseWallet: vi.fn(() => ({ id: 'coinbase', name: 'Coinbase' })),
  safe: vi.fn(() => ({ id: 'safe', name: 'Safe' }))
}));

describe('Wagmi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset wagmi state
    wagmi.set({
      loading: false,
      connected: false,
      chains: []
    });
  });

  it('renders successfully without props', () => {
    const { container } = render(Wagmi);
    expect(container).toBeTruthy();
  });

  it('renders with config provided', () => {
    const mockConfig = { 
      id: 'custom-config',
      chains: [],
      connectors: []
    };
    
    const { container } = render(Wagmi, { 
      props: { 
        config: mockConfig,
        autoConnect: false
      } 
    });

    expect(container).toBeTruthy();
  });

  it('renders with autoConnect enabled', () => {
    const { container } = render(Wagmi, {
      props: {
        config: {},
        autoConnect: true
      }
    });

    expect(container).toBeTruthy();
  });

  it('handles connected state', () => {
    wagmi.update(state => ({
      ...state,
      connected: true,
      config: { id: 'test-config' },
      chains: []
    }));

    const { container } = render(Wagmi, {
      props: {
        config: {},
        autoConnect: false
      }
    });

    expect(container).toBeTruthy();
  });
});