import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { writable } from 'svelte/store';
import '@testing-library/jest-dom';
import Contract from './Contract.svelte';

// Mock wagmi store
vi.mock('$lib/wagmi/store.svelte', () => ({
  wagmi: {
    config: { id: 'test-config' },
    connected: true,
    loading: false,
    chains: []
  }
}));

// Mock wagmi core
vi.mock('@wagmi/core', () => ({
  getContract: vi.fn(() => ({
    address: '0x123',
    abi: [],
    read: {},
    write: {}
  }))
}));

// Mock viem
vi.mock('viem', () => ({
  getAddress: vi.fn((addr) => addr)
}));

describe('Contract', () => {
  const mockAddress = '0x1234567890123456789012345678901234567890';
  const mockAbi = [
    {
      name: 'balanceOf',
      type: 'function',
      inputs: [{ name: 'owner', type: 'address' }],
      outputs: [{ name: 'balance', type: 'uint256' }]
    }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(Contract, {
      props: {
        address: mockAddress,
        abi: mockAbi
      }
    });

    expect(screen.getByText('Loading contract...')).toBeInTheDocument();
  });

  it('renders with custom contract store', () => {
    const contractStore = writable(undefined);
    
    render(Contract, {
      props: {
        address: mockAddress,
        abi: mockAbi,
        contract: contractStore
      }
    });

    // Should render the loading state
    expect(screen.getByText('Loading contract...')).toBeInTheDocument();
  });

  it('handles address prop changes', () => {
    const { rerender } = render(Contract, {
      props: {
        address: mockAddress,
        abi: mockAbi
      }
    });

    const newAddress = '0x9876543210987654321098765432109876543210';
    
    rerender({
      address: newAddress,
      abi: mockAbi
    });

    // Contract should still show loading initially
    expect(screen.getByText('Loading contract...')).toBeInTheDocument();
  });

  it('validates getAddress is called with correct address', async () => {
    const viem = await import('viem');
    
    render(Contract, {
      props: {
        address: mockAddress,
        abi: mockAbi
      }
    });

    expect(viem.getAddress).toHaveBeenCalledWith(mockAddress);
  });
});