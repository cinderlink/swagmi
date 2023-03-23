import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

import { extractorSvelte } from '@unocss/core';

export default defineConfig({
	presets: [
		presetAttributify({
			prefix: 'un-'
		}),
		presetIcons(),
		presetTypography(),
		presetUno({
			dark: 'class'
		})
	],
	extractors: [extractorSvelte],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	theme: {
		colors: {
			purple: {
				50: 'hsl(273, 22%, 90%)',
				100: 'hsl(271, 12%, 66%)',
				200: 'hsl(256, 100%, 80%)',
				300: 'hsl(256, 100%, 70%)',
				400: 'hsl(256, 100%, 60%)',
				500: 'hsl(256, 90%, 50%)',
				600: 'hsl(256, 90%, 40%)',
				700: 'hsl(266, 90%, 30%)',
				800: 'hsl(266, 45%, 20%)',
				900: 'hsl(266, 50%, 10%)'
			},
			green: {
				50: 'hsl(160, 94%, 85%)',
				100: 'hsl(160, 94%, 80%)',
				200: 'hsl(160, 94%, 75%)',
				300: 'hsl(160, 94%, 70%)',
				400: 'hsl(160, 94%, 60%)',
				500: 'hsl(160, 94%, 50%)',
				600: 'hsl(160, 94%, 40%)',
				700: 'hsl(160, 94%, 30%)',
				800: 'hsl(160, 94%, 20%)',
				900: 'hsl(160, 94%, 10%)'
			},
			pink: {
				50: 'hsl(305, 96%, 91%)',
				100: 'hsl(305, 96%, 89%)',
				200: 'hsl(305, 96%, 87%)',
				300: 'hsl(305, 96%, 85%)',
				400: 'hsl(305, 96%, 83%)',
				500: 'hsl(305, 96%, 81%)',
				600: 'hsl(305, 96%, 75%)',
				700: 'hsl(305, 86%, 65%)',
				800: 'hsl(305, 76%, 45%)',
				900: 'hsl(305, 66%, 25%)'
			},
			yellow: {
				50: 'hsl(49, 100%, 90%)',
				100: 'hsl(49, 100%, 80%)',
				200: 'hsl(49, 100%, 70%)',
				300: 'hsl(49, 100%, 62%)',
				400: 'hsl(49, 100%, 55%)',
				500: 'hsl(49, 100%, 49%)',
				600: 'hsl(49, 100%, 43%)',
				700: 'hsl(49, 90%, 37%)',
				800: 'hsl(49, 80%, 31%)',
				900: 'hsl(49, 30%, 25%)'
			},
			blue: {
				50: 'hsl(191, 78%, 96%)',
				100: 'hsl(191, 78%, 92%)',
				200: 'hsl(191, 78%, 84%)',
				300: 'hsl(191, 78%, 78%)',
				400: 'hsl(191, 78%, 65%)',
				500: 'hsl(191, 78%, 56%)',
				600: 'hsl(191, 78%, 46%)',
				700: 'hsl(191, 78%, 36%)',
				800: 'hsl(191, 78%, 26%)',
				900: 'hsl(191, 78%, 16%)'
			}
		}
	}
});
