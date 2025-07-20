# @tambykojak/eslint-config

A strict, comprehensive ESLint configuration for modern JavaScript and TypeScript projects. This configuration prioritizes code quality, maintainability, and best practices.

## Philosophy

**Strict by Default**: All ESLint rules are set to `'error'` unless explicitly decided to be disabled. This ensures high code quality and catches potential issues early in development.

## Features

- **Comprehensive Coverage**: Includes rules for JavaScript, TypeScript, JSON, Markdown, and CSS
- **Modern ESLint Flat Config**: Uses ESLint's new flat config format
- **Strict TypeScript**: Full TypeScript support with strict type checking
- **Code Style**: Integrated with `@stylistic/eslint-plugin` for consistent formatting
- **Import Sorting**: Automatic import sorting and organization
- **Best Practices**: Enforces modern JavaScript/TypeScript best practices

## Installation

```bash
npm install --save-dev @tambykojak/eslint-config
```

Or with pnpm:

```bash
pnpm add -D @tambykojak/eslint-config
```

## Usage

### Basic Setup

Create an `eslint.config.js` file in your project root:

```javascript
import { defineConfig } from 'eslint/config'
import javascriptConfig from '@tambykojak/eslint-config/src/configs/javascript-config.js'
import typescriptConfig from '@tambykojak/eslint-config/src/configs/typescript-config.js'

export default defineConfig([
  javascriptConfig,
  typescriptConfig
])
```

### Advanced Setup with All Configs

```javascript
import { defineConfig } from 'eslint/config'
import javascriptConfig from '@tambykojak/eslint-config/src/configs/javascript-config.js'
import typescriptConfig from '@tambykojak/eslint-config/src/configs/typescript-config.js'
import jsonConfig from '@tambykojak/eslint-config/src/configs/json-config.js'
import markdownConfig from '@tambykojak/eslint-config/src/configs/markdown-config.js'
import cssConfig from '@tambykojak/eslint-config/src/configs/css-config.js'
import nodeConfig from '@tambykojak/eslint-config/src/configs/node-config.js'

export default defineConfig([
  javascriptConfig,
  typescriptConfig,
  jsonConfig,
  markdownConfig,
  cssConfig,
  nodeConfig
])
```

### Custom Configuration

You can extend or override specific rules:

```javascript
import { defineConfig } from 'eslint/config'
import javascriptConfig from '@tambykojak/eslint-config/src/configs/javascript-config.js'
import typescriptConfig from '@tambykojak/eslint-config/src/configs/typescript-config.js'

export default defineConfig([
  javascriptConfig,
  typescriptConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    rules: {
      // Override specific rules for your project
      'no-console': 'warn', // Change from error to warn
      'max-lines': 'off',   // Disable max-lines rule
    }
  }
])
```

## Available Configurations

### Core Configs

- **`javascript-config.js`**: JavaScript-specific rules and best practices
- **`typescript-config.js`**: TypeScript-specific rules with strict type checking
- **`json-config.js`**: JSON file linting and validation
- **`markdown-config.js`**: Markdown file linting
- **`css-config.js`**: CSS file linting
- **`node-config.js`**: Node.js specific rules

### File Coverage

- **JavaScript**: `**/*.js`
- **TypeScript**: `**/*.ts`
- **JSON**: `**/*.json`, `**/*.jsonc`, `**/*.json5`
- **Markdown**: `**/*.md`
- **CSS**: `**/*.css`

## Key Rules and Philosophy

### Strict Error Handling
- All rules default to `'error'` level
- Only explicitly disabled rules use `'off'`
- No warnings - either pass or fail

### Code Quality
- **No Console**: `no-console` is set to error
- **No Debugger**: `no-debugger` is set to error
- **Strict Equality**: `eqeqeq` enforces `===` and `!==`
- **No Var**: `no-var` enforces `const` and `let`

### TypeScript Strictness
- **Explicit Types**: Requires explicit return types
- **No Any**: `no-explicit-any` prevents `any` usage
- **Strict Boolean**: `strict-boolean-expressions` for type safety
- **No Unsafe**: Various `no-unsafe-*` rules prevent unsafe operations

### Code Style
- **Consistent Formatting**: Uses `@stylistic/eslint-plugin`
- **Import Sorting**: Automatic import organization
- **Naming Conventions**: Enforced naming patterns
- **Function Style**: Arrow functions preferred

## Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "@eslint/css": "^0.10.0",
  "@eslint/js": "^9.0.0",
  "@eslint/json": "^0.12.0",
  "@eslint/markdown": "^7.0.0",
  "@stylistic/eslint-plugin": "^5.0.0",
  "@types/node": "^24.0.0",
  "@typescript-eslint/eslint-plugin": "^8.0.0",
  "@typescript-eslint/parser": "^8.0.0",
  "eslint": "^9.0.0",
  "typescript": "^5.0.0",
  "typescript-eslint": "^8.0.0"
}
```

## Full Configuration Details

You can view the complete configuration files in the `src/configs/` directory:

- `javascript-config.js` - 209 lines of JavaScript rules
- `typescript-config.js` - 180 lines of TypeScript rules
- `json-config.js` - JSON validation rules
- `markdown-config.js` - Markdown linting rules
- `css-config.js` - CSS linting rules
- `node-config.js` - Node.js specific rules

Each config file is well-documented and can be customized for your specific needs.

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:check": "eslint . --max-warnings 0"
  }
}
```

## IDE Integration

### VS Code

Install the ESLint extension and add to your `settings.json`:

```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "json",
    "markdown"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Other IDEs

Most modern IDEs support ESLint configuration files automatically. Ensure your IDE is configured to use the project's ESLint configuration.

## Contributing

This configuration is designed to be strict and opinionated. If you need to modify rules for your project, it's recommended to override them in your local `eslint.config.js` rather than modifying the base configuration.

## License

ISC
