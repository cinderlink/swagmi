# Swagmi Modernization Tracking

## Overview

Modernizing the swagmi package to address security vulnerabilities and update severely outdated dependencies.

## Phase 1: Security & Minor Updates ✅ COMPLETED

- [x] Update build tools (prettier, publint, tslib)
  - tslib: v2.5.0 → v2.8.1
- [x] Replace eslint-plugin-svelte3 with eslint-plugin-svelte
  - Removed deprecated eslint-plugin-svelte3
  - Added eslint-plugin-svelte v3.9.1
  - Added svelte-eslint-parser v1.2.0
- [x] Update TypeScript ESLint packages to v8.x
  - @typescript-eslint/eslint-plugin: v5.59.1 → v8.34.0
  - @typescript-eslint/parser: v5.59.1 → v8.34.0
- [x] Update ESLint config to use new plugin
- [x] Test linting after updates
  - ⚠️ Found 27 existing linting errors (to be addressed later)

## Phase 2: Framework Updates (Medium Risk) ✅ COMPLETED

- [x] Update Svelte 3 → 4 (intermediate step before v5)
  - Previous: v3.59.2
  - Updated to: v4.2.20
  - Security: Fixes XSS vulnerability
- [x] Update SvelteKit 1 → 2
  - Previous: v1.30.4
  - Updated to: v2.21.3
  - Security: Fixes multiple XSS vulnerabilities
- [x] Update Vite 4 → 5
  - Previous: v4.5.14
  - Updated to: v5.4.19
  - Security: Fixes esbuild vulnerability
- [x] Update related dependencies
  - svelte-check: v3.8.6 → v4.2.1
  - @sveltejs/adapter-auto: v2.1.1 → v3.3.1
  - @sveltejs/package: v2.0.2 → v2.3.0
  - prettier-plugin-svelte: v2.10.0 → v3.4.0
  - prettier: v2.8.8 → v3.5.3
  - @sveltejs/vite-plugin-svelte: Added v3.1.2
- [x] Fixed svelte.config.js import path
- [x] Build successfully completes

## Phase 3: Web3 Stack Overhaul (High Risk) ✅ COMPLETED

- [x] Migrate wagmi v0.10 → v2
  - Complete API rewrite completed
  - Switched from ethers to viem internally
  - Updated: `createClient()` → `createConfig()`, all hooks updated
- [x] Remove ethers v5, use viem instead
  - Replaced all ethers imports with viem equivalents
  - Updated BigNumber → BigInt, ContractReceipt → TransactionReceipt
  - Better performance and smaller bundle achieved
- [x] Replace @web3modal with custom solution
  - Removed @web3modal packages completely
  - Built custom ConnectModal using @wagmi/connectors
  - Added support for injected, WalletConnect, Coinbase, Safe connectors

## Phase 4: Modern Svelte (High Risk) 📋 TODO

- [ ] Migrate Svelte 4 → 5
  - Adopt new runes system
  - Update component patterns
- [ ] Update UnoCSS to v66.x
  - Current: v0.51.13
  - Target: v66.1.4

## Security Vulnerabilities Found

1. **Svelte 3.59.2**: XSS vulnerability (requires v4.2.19+)
2. **SvelteKit 1.30.4**: Multiple XSS vulnerabilities (requires v2.8.3+)
3. **esbuild**: Security issue in dev server (via vite/wagmi-cli)
4. **cookie**: Out of bounds character vulnerability (via SvelteKit)

## Linting Issues ✅ FIXED

All 27 linting errors have been resolved:

- Removed unused imports from components
- Replaced TypeScript `any` types with proper types (ContractInterface, unknown[], etc.)
- Added eslint-disable comments for valid inner function declarations
- Fixed NodeJS type by using ReturnType<typeof setInterval>
- Updated prettier config to remove deprecated --plugin-search-dir option

## Notes

- Using pnpm as package manager
- Library is published to npm as "swagmi"
- Depends on @cinderlink/ui-kit for UI components
- Need to maintain backward compatibility where possible
