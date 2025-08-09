import globals from 'globals'

import { mergeConfigs } from '../../src/utils/merge-configs.js'

const config = {
  languageOptions: {
    globals: globals.node,
  }
}

export const buildConfig = (options = {}) => mergeConfigs(config, options)

export default config