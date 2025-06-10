import { expect, test } from '@playwright/test';

test('index page has expected heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('svelte + wagmi = swagmi')).toBeVisible();
});

test('index page has description', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Simple headless primitives for Web3 applications')).toBeVisible();
});

test('index page has navigation links', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Components' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Stores' })).toBeVisible();
});
