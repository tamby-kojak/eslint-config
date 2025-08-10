import { defineConfig } from 'eslint/config'

import javascriptConfig from '@tamby-kojak/eslint-config-javascript'
import nodeConfig from '@tamby-kojak/eslint-config-node'
import stylisticConfig from '@tamby-kojak/eslint-config-stylistic'
import typescriptConfig from '@tamby-kojak/eslint-config-typescript'

const config = defineConfig([
  nodeConfig(),
  javascriptConfig({
    files: ['**/*.js'],
  }),
  typescriptConfig({
    files: ['**/*.ts'],
  }),
  stylisticConfig({
    files: ['**/*.js', '**/*.ts'],
  }),
  {
    ignores: ['dist', 'node_modules'],
  },
])

export default config
