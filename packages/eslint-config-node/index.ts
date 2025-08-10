import globals from 'globals'

import { mergeObjects } from '@tamby-kojak/eslint-config-shared'

const config = {
  languageOptions: {
    globals: globals.node,
  }
} as const

export default function buildConfig(overrides: object = {}) {
  return mergeObjects(config, overrides)
}