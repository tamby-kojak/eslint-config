import json from '@eslint/json'

import { mergeConfigs } from '../utils/merge-configs.js'

export const allRules = {
  'json/no-duplicate-keys': 'error',
  'json/no-empty-keys': 'error',
  'json/no-unnormalized-keys': 'error',
  'json/no-unsafe-values': 'error',
  'json/sort-keys': 'error',
  'json/top-level-interop': 'error',
}

export const overriddenRules = {
  'json/sort-keys': ['error', 'asc', {
    caseSensitive: false,
    natural: true,
    minKeys: 2,
    allowLineSeparatedGroups: true,
  }],
}

export const rules = {
  ...allRules,
  ...overriddenRules,
}

const config = {
  files: ['**/*.json'],
  language: 'json/json',
  plugins: {
    json,
  },
  rules,
}

export const buildConfig = (options = {}) => mergeConfigs(config, options)

export default config
