import markdown from '@eslint/markdown'

import { mergeConfigs } from '../utils/merge-configs.js'

export const allRules = {
  'markdown/fenced-code-language': 'error',
  'markdown/heading-increment': 'error',
  'markdown/no-bare-urls': 'error',
  'markdown/no-duplicate-definitions': 'error',
  'markdown/no-duplicate-headings': 'error',
  'markdown/no-empty-definitions': 'error',
  'markdown/no-empty-images': 'error',
  'markdown/no-empty-links': 'error',
  'markdown/no-html': 'error',
  'markdown/no-invalid-label-refs': 'error',
  'markdown/no-missing-atx-heading-space': 'error',
  'markdown/no-missing-label-refs': 'error',
  'markdown/no-missing-link-fragments': 'error',
  'markdown/no-multiple-h1': 'error',
  'markdown/no-reversed-media-syntax': 'error',
  'markdown/no-unused-definitions': 'error',
  'markdown/require-alt-text': 'error',
  'markdown/table-column-count': 'error',
}

export const overriddenRules = {
  // No overrides for markdown config
}

export const rules = {
  ...allRules,
  ...overriddenRules,
}

const config = {
  files: ['**/*.md'],
  language: 'markdown/gfm',
  plugins: {
    markdown,
  },
  rules,
}

export const buildConfig = (options = {}) => mergeConfigs(config, options)

export default config