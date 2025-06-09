# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

swagmi is a Svelte component library that provides Web3 primitives for working with wagmi and ethers.js. It offers Svelte components for wallet connections, NFT display, smart contract interactions, and transaction management.

## Key Commands

### Development

- `pnpm dev` - Start development server on port 3003
- `pnpm build` - Build the library for distribution
- `pnpm package` - Create distributable package
- `pnpm watch` - Watch mode for package development

### Testing & Quality

- `pnpm test` - Run Playwright E2E tests
- `pnpm test:unit` - Run Vitest unit tests
- `pnpm check` - Run svelte-check for type checking
- `pnpm lint` - Run Prettier and ESLint
- `pnpm format` - Auto-format code with Prettier

## Architecture

### Core Structure

The library follows a component-based architecture with clear separation:

- `/src/lib/` - Main library components exported to consumers
- `/src/routes/` - Demo pages and component examples
- `/src/lib/wagmi/` - Core wagmi integration with Svelte stores
- `/src/lib/wallet/` - Wallet connection management components
- `/src/lib/contract/` - Smart contract interaction components
- `/src/lib/registry/` - Cinderlink ecosystem contract definitions

### Key Patterns

1. **Slot Props Pattern**: Components use Svelte's slot props for data exposure

   ```svelte
   <ContractRead let:result>
   	<!-- result is exposed here -->
   </ContractRead>
   ```

2. **Store-Based State**: Uses Svelte stores for reactive state management

   - `$wallet` store for wallet state
   - `$wagmi` store for wagmi client instance

3. **Component Hierarchy**:
   - `<Wagmi>` is the root provider component
   - `<Wallet>` manages wallet connection state
   - Other components consume wallet/wagmi context

### Contract Integration

- Contract ABIs are generated via wagmi CLI from foundry project
- Registry contracts are pre-defined in `/src/lib/registry/contracts/`
- Supports both contract reads and writes with proper typing

## Development Notes

- This is a library project - changes should maintain backward compatibility
- Components should be self-contained and reusable
- UnoCSS is used for styling - prefer utility classes
- The library depends on `@cinderlink/ui-kit` for UI components
- Test new components by adding demo pages in `/src/routes/components/`
