import { defineConfig } from 'eslint/config'

import markdownConfig from '@tamby-kojak/eslint-config-markdown'

const config = defineConfig([
  ...markdownConfig(),
])

export default config