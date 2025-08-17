# Release Notes

## v0.1.0 - Initial Release

### 🎉 Project Initialization
This release marks the initial launch of @tamby-kojak/toolkit, a comprehensive development toolkit featuring ESLint configurations and TypeScript configurations for JavaScript and TypeScript projects.

### ✨ Features

#### Initial Commit
- **ESLint Configurations**: Introduced multiple ESLint configuration presets for different use cases:
  - JavaScript configuration with comprehensive rule sets
  - TypeScript configuration with type-aware linting
  - Node.js specific configurations
  - CSS, JSON, JSONC, and Markdown file linting support
  - JavaScript test configurations for test files
- **Configuration Utilities**: Added utility functions for merging configurations
- **Examples**: Provided example files demonstrating usage across different file types (JS, TS, CSS, JSON, Markdown)
- **Testing**: Implemented comprehensive test suite for configuration validation
- **TypeScript Support**: Included TypeScript configuration with strict type checking

#### Project Restructuring
- **Monorepo Architecture**: Migrated to pnpm workspaces for better package management
- **Package Separation**: Split configurations into dedicated packages:
  - `@tamby-kojak/eslint-config-javascript` - JavaScript ESLint rules
  - `@tamby-kojak/eslint-config-typescript` - TypeScript ESLint rules
  - `@tamby-kojak/eslint-config-node` - Node.js specific rules
  - `@tamby-kojak/eslint-config-stylistic` - Code style and formatting rules
  - `@tamby-kojak/eslint-config-shared` - Shared configuration utilities
  - `@tamby-kojak/tsconfig` - TypeScript configuration presets
- **Improved Organization**: Each package now maintains its own dependencies and configuration
- **Build System**: Added workspace-level build scripts for all packages

### 🔧 Technical Details
- Package Manager: pnpm v10.14.0
- Node Version: Specified in .nvmrc
- VS Code settings included for consistent development experience

### 📦 Packages
All packages are scoped under `@tamby-kojak/` namespace and can be installed independently based on project needs.

### 🚀 Getting Started
This toolkit provides production-ready ESLint and TypeScript configurations that can be easily integrated into any JavaScript or TypeScript project. Each package is designed to be composable and can be used standalone or in combination with others.