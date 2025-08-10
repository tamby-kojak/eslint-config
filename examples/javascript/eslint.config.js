import { defineConfig } from 'eslint/config'

import javascriptConfig from '@tamby-kojak/eslint-config-javascript'
import nodeConfig from '@tamby-kojak/eslint-config-node'
import stylisticConfig from '@tamby-kojak/eslint-config-stylistic'

const config = defineConfig([
  nodeConfig(),
  javascriptConfig({
    files: ['**/*.js'],
  }),
  stylisticConfig({
    files: ['**/*.js'],
  }),
])

export default config
