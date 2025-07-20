import css from "@eslint/css";

import { mergeConfigs } from '../utils/merge-configs.js'

export const allRules = {
  "css/no-duplicate-imports": "error",
  "css/no-empty-blocks": "error",
  "css/no-important": "error",
  "css/no-invalid-at-rule-placement": "error",
  "css/no-invalid-at-rules": "error",
  "css/no-invalid-named-grid-areas": "error",
  "css/no-invalid-properties": "error",
  "css/prefer-logical-properties": "error",
  "css/relative-font-units": "error",
  "css/use-baseline": "error",
  "css/use-layers": "error",
}

export const overriddenRules = {
  // No overrides for css config
}

export const rules = {
  ...allRules,
  ...overriddenRules,
}

const config = {
  files: ["**/*.css"],
  plugins: {
    css,
  },
  language: "css/css",
  rules,
}

export const buildConfig = (options = {}) => mergeConfigs(config, options)

export default config