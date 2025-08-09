import { defineConfig } from 'eslint/config'

import javascriptConfig from '@tamby-kojak/eslint-config-javascript';
import nodeConfig from '@tamby-kojak/eslint-config-node';

const config = defineConfig([
  nodeConfig,
  javascriptConfig,
])

export default config