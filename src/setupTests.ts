import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/svelte';
import { afterEach, vi } from 'vitest';

// Mock SvelteKit environment
vi.mock('$env/dynamic/public', () => ({
  env: {
    PUBLIC_WALLET_CONNECT_PROJECT_ID: 'test-project-id'
  }
}));

// Mock $app/stores
vi.mock('$app/stores', () => ({
  page: {
    subscribe: vi.fn()
  }
}));

// Cleanup after each test
afterEach(() => {
  cleanup();
});