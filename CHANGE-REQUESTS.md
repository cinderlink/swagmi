# Change Requests for Swagmi

## Build Compatibility Issues

The following changes are needed for swagmi to work with modern wagmi and viem:

### 1. Remove deprecated wagmi import paths

- [ ] Remove `@wagmi/core/connectors/mock` import (no longer available)
- [ ] Remove `@wagmi/core/providers/jsonRpc` import (no longer available)
- [ ] Update to use new wagmi v2 APIs

### 2. Update peer dependencies

- [ ] Update `@wagmi/core` to v2.x
- [ ] Update `viem` to v2.x
- [ ] Update `svelte` to v4.x (already in progress)

### 3. API modernization

- [ ] Replace `getProvider()` with viem client pattern
- [ ] Replace `MockConnector` with modern wagmi connectors
- [ ] Update event handling to use new wagmi hooks

## Notes

- The social-dapp has been updated to Svelte 4 successfully
- Dev server works but build fails due to missing wagmi exports
- Tauri functionality temporarily disabled until swagmi is updated
