# Release Notes

## v0.2.0 - Project Restructuring

### Breaking Changes
- **Monorepo Migration**: Project has been reorganized into a pnpm workspace monorepo structure
- All configuration modules have been moved to separate packages under `packages/` directory
- Previous direct imports from `src/configs/` will no longer work

### New Packages
The following packages are now available as separate modules:
- `@tamby-kojak/eslint-config-javascript` - JavaScript ESLint configuration
- `@tamby-kojak/eslint-config-typescript` - TypeScript ESLint configuration  
- `@tamby-kojak/eslint-config-node` - Node.js specific ESLint rules
- `@tamby-kojak/eslint-config-stylistic` - Code style and formatting rules
- `@tamby-kojak/eslint-config-shared` - Shared ESLint configuration utilities
- `@tamby-kojak/tsconfig` - TypeScript configuration presets

### Changes
- Removed individual configuration files for CSS, JSON, JSONC, and Markdown
- Consolidated stylistic rules into a dedicated package
- Added example projects demonstrating JavaScript and TypeScript configurations
- Introduced workspace-level scripts for building and publishing packages

### Developer Experience
- Added pnpm workspace support for better package management
- Simplified package publishing with unified scripts
- Each package now has its own `package.json` and `tsconfig.json`

---

## v0.1.0 - Initial Release

### Features
- **ESLint Configurations**: Comprehensive ESLint configurations for multiple file types:
  - JavaScript with extensive linting rules
  - TypeScript with type-aware linting
  - CSS files support
  - JSON/JSON5/JSONC files validation
  - Markdown code blocks linting
  - Node.js specific rules

- **Testing Support**: Dedicated configuration for JavaScript test files with Jest-specific rules

- **Utility Functions**: Helper utilities for merging and managing configurations

- **Examples**: Sample files demonstrating configuration usage across different file types

### Technical Details
- Built with ESLint flat config format
- TypeScript support with strict type checking
- Comprehensive test coverage for configuration merging logic
- VSCode integration with recommended settings
- Node.js version requirement specified via `.nvmrc`

### Dependencies
- ESLint and related plugins for JavaScript, TypeScript, JSON, and Markdown
- Stylistic formatting rules
- Testing utilities and configurations