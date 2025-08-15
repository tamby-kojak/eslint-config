# Release Notes

## Version 0.1.0

### 🎉 Initial Release

This marks the first release of the @tamby-kojak/toolkit, a comprehensive development toolkit providing shared configurations for ESLint and TypeScript projects.

### ✨ Features

#### Initial Setup (696bccf)
- **Development Configuration Suite**: Established foundation with multiple configuration modules for different aspects of development
  - ESLint configurations for JavaScript, TypeScript, CSS, JSON, JSONC, and Markdown files
  - Node.js specific configurations
  - Comprehensive test configurations for JavaScript projects
  - Utility functions for merging configurations
- **Example Files**: Added example files demonstrating usage across multiple file types (JS, TS, CSS, JSON, JSONC, JSON5, Markdown)
- **Testing Infrastructure**: Implemented test suites for configuration validation and merge utilities
- **TypeScript Support**: Full TypeScript configuration with strict type checking

#### Monorepo Architecture (ea18a06)  
- **Workspace Organization**: Restructured project into pnpm workspaces for better modularity and maintainability
  - Separated configurations into individual packages for targeted usage
  - Each configuration type now exists as an independent, publishable package
- **Package Structure**:
  - `@tamby-kojak/eslint-config-javascript`: JavaScript linting rules
  - `@tamby-kojak/eslint-config-typescript`: TypeScript-specific linting configurations
  - `@tamby-kojak/eslint-config-node`: Node.js environment configurations
  - `@tamby-kojak/eslint-config-shared`: Shared/common ESLint rules
  - `@tamby-kojak/eslint-config-stylistic`: Code style and formatting rules
  - `@tamby-kojak/tsconfig`: Shared TypeScript configuration presets
- **Improved Examples**: Reorganized examples into separate JavaScript and TypeScript projects with their own configurations
- **Build System**: Added workspace-level build and publish scripts for managing all packages

### 🛠️ Technical Details

- **Package Manager**: pnpm v10.14.0
- **Node Version**: Configured with .nvmrc
- **Build Tools**: TypeScript compilation for all packages
- **Workspace Commands**:
  - `pnpm packages:build`: Build all packages
  - `pnpm packages:clean`: Clean build artifacts and dependencies
  - `pnpm packages:publish`: Publish all packages

### 📦 Package Benefits

The monorepo structure allows developers to:
- Install only the configurations they need
- Reduce dependency bloat in consuming projects
- Maintain version consistency across related packages
- Share common functionality through the shared package

### 🔄 Migration

This release transforms the toolkit from a single package to a modular workspace structure. Users can now selectively install specific configuration packages based on their project needs rather than importing everything from a monolithic package.