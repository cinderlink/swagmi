import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import path from 'path';

export default defineConfig({
	plugins: [svelte(), svelteTesting()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
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
		}
	},
	resolve: process.env.VITEST
		? {
				conditions: ['browser'],
				alias: {
					$lib: path.resolve('./src/lib'),
					'$env/dynamic/public': path.resolve('./src/test-mocks/env.ts')
				}
			}
		: {
				conditions: ['browser', 'development', 'svelte'],
				alias: {
					$lib: path.resolve('./src/lib'),
					'$env/dynamic/public': path.resolve('./src/test-mocks/env.ts')
				}
			}
});
