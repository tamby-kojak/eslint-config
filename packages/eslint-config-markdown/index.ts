import { mergeObjects } from '@tamby-kojak/eslint-config-shared'
import markdownPlugin from '@eslint/markdown'
import stylisticConfig from '@tamby-kojak/eslint-config-stylistic'

const markdownRules = {
  'no-console': 'off',
  'no-undef': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'padded-blocks': 'off',
  'strict': 'off',
  'unicode-bom': 'off',
  'no-irregular-whitespace': 'off',
  'no-unused-labels': 'off',
} as const

const config = [
  {
    files: ['**/*.md'],
    plugins: {
      markdown: markdownPlugin,
    },
    processor: 'markdown/markdown',
  },
  {
    files: ['**/*.md/**'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    rules: markdownRules,
  },
  stylisticConfig({
    files: ['**/*.md/**'],
    rules: {
      '@stylistic/comma-dangle': 'off',
      '@stylistic/eol-last': 'off',
      '@stylistic/no-multiple-empty-lines': 'off',
      '@stylistic/no-trailing-spaces': 'off',
      '@stylistic/semi': 'off',
    },
  }),
] as const

type Rules = typeof markdownRules

type ConfigOverrides = {
  files?: string[]
  ignores?: string[]
  rules?: Partial<Rules>
}

export default function buildConfig(overrides: ConfigOverrides = {}) {
  if (Object.keys(overrides).length === 0) {
    return config
  }
  
  const baseConfig = [...config] as any[]
  
  if (overrides.files) {
    baseConfig[0] = { ...baseConfig[0], files: overrides.files }
  }
  
  if (overrides.ignores) {
    baseConfig[0] = { ...baseConfig[0], ignores: overrides.ignores }
  }
  
  if (overrides.rules) {
    baseConfig[1] = mergeObjects(baseConfig[1], { rules: overrides.rules })
  }
  
  return baseConfig
}