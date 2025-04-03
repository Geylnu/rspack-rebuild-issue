import type { RsbuildPlugin } from '@rsbuild/core'
import type { Compiler, RspackPluginInstance, Module } from '@rspack/core'




let reBuild = true

export class rspackPluginLocale implements RspackPluginInstance {
  apply(compiler: Compiler) {
    compiler.hooks.thisCompilation.tap('LocalePlugin', (compilation) => {
      compilation.hooks.finishModules.tapPromise('LocalePlugin', async (modules) => {
        if (reBuild) {
          reBuild = false

          Array.from(modules).forEach((module) => {
            compilation.rebuildModule(module, (err, rebuiltModule) => {
              console.log(`Rebuilt ${rebuiltModule?.identifier()}.`);
              if (err) {
                console.error(err)
              }
            })
          })
        }
      })
    })
  }
}

export const pluginLocale =(): RsbuildPlugin =>( {
  name: 'plugin-locale',
  setup(api) {
    api.modifyBundlerChain((chain) => {
      chain.plugin('locale').use(rspackPluginLocale)
      chain.module.rule('locale').test(/\.(?:ts|tsx|jsx|mts|cts)$/).use('locale-loader').loader(require.resolve('./loader.js'))
    })
  },
})
