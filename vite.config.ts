import { sveltekit } from '@sveltejs/kit/vite';
import unocss from 'unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [unocss(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		minify: false,
		target: 'esnext',
		commonjsOptions: {
			transformMixedEsModules: true
		},
		rollupOptions: {
			external: ['svelte-highlight']
		}
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'esnext'
		}
	}
});
