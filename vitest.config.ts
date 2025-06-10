import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/lib/**/*.{js,ts,svelte}'],
      exclude: [
        'src/lib/**/*.d.ts',
        'src/lib/**/index.ts',
        'src/lib/contracts/**',
        'src/lib/registry/contracts/**'
      ]
    },
    alias: {
      '$lib': path.resolve('./src/lib'),
      '$app': path.resolve('./src/app-mocks')
    }
  },
  resolve: {
    conditions: ['browser', 'development', 'svelte'],
    alias: {
      '$lib': path.resolve('./src/lib')
    }
  }
});