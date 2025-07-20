import jsonc from 'eslint-plugin-jsonc'
import jsoncParser from 'jsonc-eslint-parser'

import { mergeConfigs } from '../utils/merge-configs.js'

export const allRules = {
  'jsonc/array-bracket-newline': 'error',
  'jsonc/array-bracket-spacing': 'error',
  'jsonc/array-element-newline': 'error',
  'jsonc/auto': 'error',
  'jsonc/comma-dangle': 'error',
  'jsonc/comma-style': 'error',
  'jsonc/indent': 'error',
  'jsonc/key-name-casing': 'error',
  'jsonc/key-spacing': 'error',
  'jsonc/no-bigint-literals': 'error',
  'jsonc/no-binary-expression': 'error',
  'jsonc/no-binary-numeric-literals': 'error',
  'jsonc/no-comments': 'error',
  'jsonc/no-dupe-keys': 'error',
  'jsonc/no-escape-sequence-in-identifier': 'error',
  'jsonc/no-floating-decimal': 'error',
  'jsonc/no-hexadecimal-numeric-literals': 'error',
  'jsonc/no-infinity': 'error',
  'jsonc/no-irregular-whitespace': 'error',
  'jsonc/no-multi-str': 'error',
  'jsonc/no-nan': 'error',
  'jsonc/no-number-props': 'error',
  'jsonc/no-numeric-separators': 'error',
  'jsonc/no-octal-escape': 'error',
  'jsonc/no-octal-numeric-literals': 'error',
  'jsonc/no-octal': 'error',
  'jsonc/no-parenthesized': 'error',
  'jsonc/no-plus-sign': 'error',
  'jsonc/no-regexp-literals': 'error',
  'jsonc/no-sparse-arrays': 'error',
  'jsonc/no-template-literals': 'error',
  'jsonc/no-undefined-value': 'error',
  'jsonc/no-unicode-codepoint-escapes': 'error',
  'jsonc/no-useless-escape': 'error',
  'jsonc/object-curly-newline': 'error',
  'jsonc/object-curly-spacing': 'error',
  'jsonc/object-property-newline': 'error',
  'jsonc/quote-props': 'error',
  'jsonc/quotes': 'error',
  'jsonc/sort-array-values': ['error', { pathPattern: '.*', order: { type: "asc", caseSensitive: true, natural: true } }],
  'jsonc/sort-keys': 'error',
  'jsonc/space-unary-ops': 'error',
  'jsonc/valid-json-number': 'error',
  'jsonc/vue-custom-block/no-parsing-error': 'error',
}

const INDENT_SPACES = 2

export const overriddenRules = {
  'jsonc/comma-dangle': ['error', 'always-multiline'],
  'jsonc/indent': ['error', INDENT_SPACES],
  'jsonc/no-comments': 'off',
}

export const rules = {
  ...allRules,
  ...overriddenRules,
}

const config = {
  files: ['**/*.jsonc', '**/*.json5'],
  plugins: {
    jsonc,
  },
  languageOptions: {
    parser: jsoncParser,
  },
  rules,
}

export const buildConfig = (options = {}) => mergeConfigs(config, options)

export default config