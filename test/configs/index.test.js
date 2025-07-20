import assert from 'node:assert';
import { test } from 'node:test';

import cssConfig, { buildConfig as buildCssConfig } from '../../src/configs/css-config.js';
import javascriptConfig, { buildConfig as buildJavascriptConfig } from '../../src/configs/javascript-config.js';
import jsonConfig, { buildConfig as buildJsonConfig } from '../../src/configs/json-config.js';
import jsoncConfig, { buildConfig as buildJsoncConfig } from '../../src/configs/jsonc-config.js';
import markdownConfig, { buildConfig as buildMarkdownConfig } from '../../src/configs/markdown-config.js';
import nodeConfig, { buildConfig as buildNodeConfig } from '../../src/configs/node-config.js';
import typescriptConfig, { buildConfig as buildTypescriptConfig } from '../../src/configs/typescript-config.js';

const testConfig = (name, defaultConfig, configBuilder) => {
  test(name, (t) => {
    t.test('buildConfig', (t) => {
      t.test('should return a config object', () => {
        const config = configBuilder({});
        assert.ok(config);
        assert.strictEqual(typeof config, 'object');
      });
  
      t.test('should return a config object with the correct files array', () => {
        const addedItems = ['**/*.ext1'];

        const config = configBuilder({
          files: addedItems,
        });

        let defaultConfigFilesCount = 0;
        if (defaultConfig.files) {
          defaultConfigFilesCount = defaultConfig.files.length;
        }
        assert.strictEqual(config.files.length, defaultConfigFilesCount + addedItems.length);
      });
  
      t.test('should return a config object with the correct exclude', () => {
        const addedItems = ['**/*.ext1', '**/*.ext2'];
        const config = configBuilder({
          exclude: addedItems,
        });

        let defaultConfigExcludeCount = 0;
        if (defaultConfig.exclude) {
          defaultConfigExcludeCount = defaultConfig.exclude.length;
        }
        assert.strictEqual(config.exclude.length, defaultConfigExcludeCount + addedItems.length);
      });
  
      t.test('should return a config object with the correct rules', () => {
        const config = configBuilder({
          rules: {
            'additional-rule': 'error',
          },
        });
  
        assert.strictEqual(config.rules['additional-rule'], 'error');
      });
    });
  });
}

testConfig('css-config.js', cssConfig,buildCssConfig);
testConfig('javascript-config.js', javascriptConfig, buildJavascriptConfig);
testConfig('json-config.js', jsonConfig, buildJsonConfig);
testConfig('jsonc-config.js', jsoncConfig, buildJsoncConfig);
testConfig('markdown-config.js', markdownConfig, buildMarkdownConfig);
testConfig('node-config.js', nodeConfig, buildNodeConfig);
testConfig('typescript-config.js', typescriptConfig, buildTypescriptConfig);
