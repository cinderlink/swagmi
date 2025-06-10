import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import ConnectButton from './ConnectButton.svelte';
import { wallet } from './store.svelte';

// Mock the modal store
vi.mock('./modal.svelte', () => ({
  modal: {
    isOpen: false,
    show: vi.fn(),
    hide: vi.fn(),
    toggle: vi.fn()
  },
  showModal: vi.fn(),
  hideModal: vi.fn()
}));

// Mock the wagmi store 
vi.mock('$lib/wagmi/store.svelte', () => ({
  default: {
    config: undefined,
    connected: false,
    loading: false,
    chains: []
  },
  wagmi: {
    config: undefined,
    connected: false,
    loading: false,
    chains: []
  }
}));

describe('ConnectButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset wallet state to disconnected
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
  });

  it('renders connect button text when disconnected', () => {
    render(ConnectButton);
    
    expect(screen.getByText('Connect Wallet')).toBeInTheDocument();
  });

  it('renders custom text when provided', () => {
    render(ConnectButton, { props: { text: 'Custom Connect' } });
    
    expect(screen.getByText('Custom Connect')).toBeInTheDocument();
  });

  it('shows connecting state when wallet is connecting', () => {
    wallet.update(state => ({ ...state, connecting: true }));
    
    render(ConnectButton);
    
    expect(screen.getByText('Connecting...')).toBeInTheDocument();
  });

  it('is disabled when connecting', () => {
    wallet.update(state => ({ ...state, connecting: true }));
    
    render(ConnectButton);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies custom class when provided', () => {
    render(ConnectButton, { props: { class: 'custom-class' } });
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('calls showModal when clicked', async () => {
    const { showModal } = await import('./modal.svelte');
    render(ConnectButton);
    
    const button = screen.getByRole('button');
    await fireEvent.click(button);
    
    expect(showModal).toHaveBeenCalledOnce();
  });
});