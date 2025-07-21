// Main entry point for the ESLint config package
export { default as javascriptConfig, buildConfig as buildJavascriptConfig } from './configs/javascript-config.js';
export { default as typescriptConfig, buildConfig as buildTypescriptConfig } from './configs/typescript-config.js';
export { default as jsonConfig, buildConfig as buildJsonConfig } from './configs/json-config.js';
export { default as jsoncConfig, buildConfig as buildJsoncConfig } from './configs/jsonc-config.js';
export { default as markdownConfig, buildConfig as buildMarkdownConfig } from './configs/markdown-config.js';
export { default as cssConfig, buildConfig as buildCssConfig } from './configs/css-config.js';
export { default as nodeConfig, buildConfig as buildNodeConfig } from './configs/node-config.js';

// Export the merge utility
export { mergeConfigs } from './utils/merge-configs.js';

// Default export - all configs combined
import javascriptConfig from './configs/javascript-config.js';
import typescriptConfig from './configs/typescript-config.js';
import jsonConfig from './configs/json-config.js';
import jsoncConfig from './configs/jsonc-config.js';
import markdownConfig from './configs/markdown-config.js';
import cssConfig from './configs/css-config.js';
import nodeConfig from './configs/node-config.js';

export default [
  javascriptConfig,
  typescriptConfig,
  jsonConfig,
  jsoncConfig,
  markdownConfig,
  cssConfig,
  nodeConfig
]; 