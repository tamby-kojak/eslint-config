import { defineConfig } from 'eslint/config'

import { buildConfig as buildJsonConfig } from './src/configs/json-config.js';
import cssConfig from './src/configs/css-config.js';
import javascriptConfig from './src/configs/javascript-config.js';
import javascriptTestsConfig from './src/configs/javascript-tests-config.js';
import jsoncConfig from './src/configs/jsonc-config.js';
import markdownConfig from './src/configs/markdown-config.js';
import nodeConfig from './src/configs/node-config.js';
import typescriptConfig from './src/configs/typescript-config.js';

const config = defineConfig([
  nodeConfig,
  javascriptConfig,
  javascriptTestsConfig,
  typescriptConfig,
  cssConfig,
  buildJsonConfig({
    ignores: ['.vscode/**', 'tsconfig.json', 'package.json'],
  }),
  jsoncConfig,
  markdownConfig,
])

export default config