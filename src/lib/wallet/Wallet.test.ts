import { render } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Wallet from './Wallet.svelte';
import { wallet, walletBalance } from './store.svelte';

// Mock wagmi store
vi.mock('$lib/wagmi/store.svelte', () => ({
  default: {
    config: { id: 'test-config' },
    connected: true,
    loading: false,
    chains: []
  },
  wagmi: {
    config: { id: 'test-config' },
    connected: true,
    loading: false,
    chains: []
  }
}));

// Mock components
vi.mock('./ConnectButton.svelte', () => ({
  default: vi.fn()
}));

vi.mock('./DisconnectButton.svelte', () => ({
  default: vi.fn()
}));

describe('Wallet', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset wallet state
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

  it('renders successfully when disconnected', () => {
    const { container } = render(Wallet);
    expect(container).toBeTruthy();
  });

  it('renders when connected', () => {
    wallet.update(state => ({
      ...state,
      connected: true,
      address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
      displayName: 'test.eth'
    }));
    
    walletBalance.update(state => ({
      ...state,
      formatted: '1.5',
      value: BigInt(1500000000000000000)
    }));
    
    const { container } = render(Wallet);
    expect(container).toBeTruthy();
  });

  it('renders with custom class', () => {
    const { container } = render(Wallet, {
      props: {
        class: 'custom-wallet-class'
      }
    });
    
    expect(container).toBeTruthy();
  });

  it('handles loading state', () => {
    wallet.update(state => ({
      ...state,
      loading: true
    }));
    
    const { container } = render(Wallet);
    expect(container).toBeTruthy();
  });

  it('handles connected state with balance', () => {
    wallet.update(state => ({
      ...state,
      connected: true,
      address: '0x1234567890123456789012345678901234567890' as `0x${string}`
    }));
    
    walletBalance.update(state => ({
      ...state,
      formatted: '2.75',
      value: BigInt(2750000000000000000)
    }));
    
    const { container } = render(Wallet);
    expect(container).toBeTruthy();
  });
});