import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
  },
}

export default config
