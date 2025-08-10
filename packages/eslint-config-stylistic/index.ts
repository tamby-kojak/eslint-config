import { mergeObjects } from '@tamby-kojak/eslint-config-shared'
import plugin from '@stylistic/eslint-plugin'

const allRules = {
  '@stylistic/array-bracket-spacing': 'error',
  '@stylistic/arrow-parens': 'error',
  '@stylistic/arrow-spacing': 'error',
  '@stylistic/block-spacing': 'error',
  '@stylistic/brace-style': 'error',
  '@stylistic/comma-dangle': 'error',
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': 'error',
  '@stylistic/computed-property-spacing': 'error',
  '@stylistic/dot-location': 'error',
  '@stylistic/eol-last': 'error',
  '@stylistic/generator-star-spacing': 'error',
  '@stylistic/indent': 'error',
  '@stylistic/indent-binary-ops': 'error',
  '@stylistic/key-spacing': 'error',
  '@stylistic/keyword-spacing': 'error',
  '@stylistic/lines-between-class-members': 'error',
  '@stylistic/max-statements-per-line': 'error',
  '@stylistic/member-delimiter-style': 'error',
  '@stylistic/multiline-ternary': 'error',
  '@stylistic/new-parens': 'error',
  '@stylistic/no-extra-parens': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-operators': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-multiple-empty-lines': 'error',
  '@stylistic/no-tabs': 'error',
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/object-curly-spacing': 'error',
  '@stylistic/operator-linebreak': 'error',
  '@stylistic/padded-blocks': 'error',
  '@stylistic/quote-props': 'error',
  '@stylistic/quotes': 'error',
  '@stylistic/rest-spread-spacing': 'error',
  '@stylistic/semi': 'error',
  '@stylistic/semi-spacing': 'error',
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': 'error',
  '@stylistic/space-in-parens': 'error',
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': 'error',
  '@stylistic/spaced-comment': 'error',
  '@stylistic/template-curly-spacing': 'error',
  '@stylistic/template-tag-spacing': 'error',
  '@stylistic/type-annotation-spacing': 'error',
  '@stylistic/type-generic-spacing': 'error',
  '@stylistic/type-named-tuple-spacing': 'error',
  '@stylistic/wrap-iife': 'error',
  '@stylistic/yield-star-spacing': 'error',

  '@stylistic/jsx-closing-bracket-location': 'error',
  '@stylistic/jsx-closing-tag-location': 'error',
  '@stylistic/jsx-curly-brace-presence': 'error',
  '@stylistic/jsx-curly-newline': 'error',
  '@stylistic/jsx-curly-spacing': 'error',
  '@stylistic/jsx-equals-spacing': 'error',
  '@stylistic/jsx-first-prop-new-line': 'error',
  '@stylistic/jsx-function-call-newline': 'error',
  '@stylistic/jsx-indent-props': 'error',
  '@stylistic/jsx-max-props-per-line': 'error',
  '@stylistic/jsx-one-expression-per-line': 'error',
  '@stylistic/jsx-quotes': 'error',
  '@stylistic/jsx-tag-spacing': 'error',
  '@stylistic/jsx-wrap-multilines': 'error',
} as const

export const overriddenRules = {
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/quote-props': ['error', 'as-needed'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/semi': ['error', 'never'],
} as const

export const rules = {
  ...allRules,
  ...overriddenRules,
} as const

const config = {
  plugins: {
    '@stylistic': plugin
  },
  rules,
} as const

type Rules = { [K in keyof typeof allRules]: unknown }

type ConfigOverrides = {
  files?: string[]
  ignores?: string[]
  rules?: Partial<Rules>
}

export default function buildConfig(overrides: ConfigOverrides) {
  return mergeObjects(config, overrides)
}