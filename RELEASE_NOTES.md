# Release Notes

## v0.2.0 - Project Restructure

### Breaking Changes
- **Monorepo Migration**: The project has been restructured into a pnpm workspace monorepo architecture
- **Package Reorganization**: ESLint configurations and TypeScript configs are now separate packages

### What's New

#### Workspace Structure
- Migrated to pnpm workspaces for better package management
- Split configurations into dedicated packages:
  - `@tamby-kojak/eslint-config-javascript` - JavaScript linting rules
  - `@tamby-kojak/eslint-config-typescript` - TypeScript linting rules  
  - `@tamby-kojak/eslint-config-node` - Node.js specific linting
  - `@tamby-kojak/eslint-config-stylistic` - Code style rules
  - `@tamby-kojak/eslint-config-shared` - Shared configuration utilities
  - `@tamby-kojak/tsconfig` - TypeScript configuration presets

#### Examples
- Added dedicated example projects for JavaScript and TypeScript
- Each example demonstrates proper configuration usage

### Removed
- Removed monolithic configuration files from root
- Removed CSS, JSON, JSONC, and Markdown linting configs (to be re-added in packages)
- Removed test files from root (to be migrated)

---

## v0.1.0 - Initial Release

### Features
- **ESLint Configuration Suite**: Comprehensive ESLint configurations for multiple file types
  - JavaScript configuration with modern rules
  - TypeScript support with type-aware linting
  - Node.js specific rules
  - JSON/JSONC/JSON5 linting
  - CSS linting support
  - Markdown code block linting
  
- **Testing Support**: Dedicated configuration for JavaScript test files
- **Utility Functions**: Config merging utilities for custom extensions
- **Examples**: Sample files demonstrating configuration usage
- **TypeScript Setup**: Full TypeScript configuration with strict settings

### Development Setup
- Node.js version locked to latest LTS (.nvmrc)
- pnpm as package manager
- VSCode settings pre-configured
- Comprehensive test suite for configurations