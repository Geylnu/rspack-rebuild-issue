import type { RsbuildConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginLocale } from './plugin'


const config: RsbuildConfig = {
  plugins: [pluginReact(), pluginLocale()],
}

export default config