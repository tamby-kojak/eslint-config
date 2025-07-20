import { test } from 'node:test';
import assert from 'node:assert';
import { mergeConfigs } from '../src/utils/merge-configs.js';

test('mergeConfigs.js', (t) => {
  t.test('should merge simple objects correctly', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const result = mergeConfigs(target, source);
    
    assert.strictEqual(result.a, 1);
    assert.strictEqual(result.b, 3);
    assert.strictEqual(result.c, 4);
  });

  t.test('should merge nested objects correctly', () => {
    const target = { 
      rules: { 
        'no-console': 'error',
        'no-debugger': 'error'
      }
    };
    const source = { 
      rules: { 
        'no-console': 'warn',
        'new-rule': 'error'
      }
    };
    const result = mergeConfigs(target, source);
    
    assert.strictEqual(result.rules['no-console'], 'warn');
    assert.strictEqual(result.rules['no-debugger'], 'error');
    assert.strictEqual(result.rules['new-rule'], 'error');
  });

  t.test('should concatenate arrays correctly', () => {
    const target = { files: ['**/*.js', '**/*.ts'] };
    const source = { files: ['**/*.jsx', '**/*.tsx'] };
    const result = mergeConfigs(target, source);
    
    assert.deepStrictEqual(result.files, ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx']);
  });

  t.test('should handle empty arrays correctly', () => {
    const target = { files: ['**/*.js'] };
    const source = { files: [] };
    const result = mergeConfigs(target, source);
    
    assert.deepStrictEqual(result.files, ['**/*.js']);
  });

  t.test('should handle null and undefined values', () => {
    const target = { rules: { 'existing-rule': 'error' } };
    const source = { 
      rules: { 
        'test-rule': null,
        'another-rule': undefined
      }
    };
    const result = mergeConfigs(target, source);
    
    assert.strictEqual(result.rules['existing-rule'], 'error');
    assert.strictEqual(result.rules['test-rule'], null);
    assert.strictEqual(result.rules['another-rule'], undefined);
  });

  t.test('should merge complex nested structures', () => {
    const target = {
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'script'
        }
      },
      plugins: {
        'existing-plugin': true
      }
    };
    const source = {
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2022,
          sourceType: 'module'
        }
      },
      plugins: {
        'custom-plugin': true
      }
    };
    const result = mergeConfigs(target, source);
    
    assert.strictEqual(result.languageOptions.parserOptions.ecmaVersion, 2022);
    assert.strictEqual(result.languageOptions.parserOptions.sourceType, 'module');
    assert.strictEqual(result.plugins['existing-plugin'], true);
    assert.strictEqual(result.plugins['custom-plugin'], true);
  });

  t.test('should preserve existing nested structures', () => {
    const target = {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: process.cwd()
        }
      }
    };
    const source = {
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2022
        }
      }
    };
    const result = mergeConfigs(target, source);
    
    assert.ok(result.languageOptions.parserOptions.projectService);
    assert.ok(result.languageOptions.parserOptions.tsconfigRootDir);
    assert.strictEqual(result.languageOptions.parserOptions.ecmaVersion, 2022);
  });

  t.test('should handle multiple array concatenations', () => {
    const target = { files: ['**/*.js'] };
    const source1 = { files: ['**/*.jsx'] };
    const source2 = { files: ['**/*.tsx'] };
    
    const result1 = mergeConfigs(target, source1);
    const result2 = mergeConfigs(result1, source2);
    
    assert.deepStrictEqual(result1.files, ['**/*.js', '**/*.jsx']);
    assert.deepStrictEqual(result2.files, ['**/*.js', '**/*.jsx', '**/*.tsx']);
  });

  t.test('should handle deeply nested object merging', () => {
    const target = {
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            globalReturn: true
          }
        }
      }
    };
    const source = {
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
            globalReturn: false
          }
        }
      }
    };
    const result = mergeConfigs(target, source);
    
    assert.strictEqual(result.languageOptions.parserOptions.ecmaFeatures.jsx, true);
    assert.strictEqual(result.languageOptions.parserOptions.ecmaFeatures.globalReturn, false);
  });

  t.test('should preserve existing config structure', () => {
    const target = {
      files: ['**/*.js'],
      rules: { 'no-console': 'error' }
    };
    const source = {};
    const result = mergeConfigs(target, source);
    
    assert.ok(Array.isArray(result.files));
    assert.ok(typeof result.rules === 'object');
    assert.strictEqual(result.files[0], '**/*.js');
    assert.strictEqual(result.rules['no-console'], 'error');
  });

  t.test('should handle mixed array and object merging', () => {
    const target = {
      files: ['**/*.js'],
      rules: {
        'no-console': 'error'
      },
      plugins: {
        'existing-plugin': true
      }
    };
    const source = {
      files: ['**/*.mjs'],
      rules: {
        'no-console': 'warn'
      },
      plugins: {
        'new-plugin': true
      }
    };
    const result = mergeConfigs(target, source);
    
    assert.ok(result.files.includes('**/*.js'));
    assert.ok(result.files.includes('**/*.mjs'));
    
    assert.strictEqual(result.rules['no-console'], 'warn');
    assert.strictEqual(result.plugins['existing-plugin'], true);
    assert.strictEqual(result.plugins['new-plugin'], true);
  });

  t.test('should handle when target has no arrays but source does', () => {
    const target = { rules: { 'no-console': 'error' } };
    const source = { files: ['**/*.jsx'] };
    const result = mergeConfigs(target, source);
    
    assert.strictEqual(result.rules['no-console'], 'error');
    assert.deepStrictEqual(result.files, ['**/*.jsx']);
  });

  t.test('should handle when source has no arrays but target does', () => {
    const target = { files: ['**/*.js'] };
    const source = { rules: { 'no-debugger': 'error' } };
    const result = mergeConfigs(target, source);
    
    assert.deepStrictEqual(result.files, ['**/*.js']);
    assert.strictEqual(result.rules['no-debugger'], 'error');
  });

  t.test('should handle primitive values correctly', () => {
    const target = { 
      language: 'javascript',
      plugins: { 'plugin1': true }
    };
    const source = { 
      language: 'typescript',
      plugins: { 'plugin2': false }
    };
    const result = mergeConfigs(target, source);
    
    assert.strictEqual(result.language, 'typescript');
    assert.strictEqual(result.plugins['plugin1'], true);
    assert.strictEqual(result.plugins['plugin2'], false);
  });
}); 