import basicConfig, { name, file } from './rollup.config'
import vue from 'rollup-plugin-vue'

basicConfig.plugins.push(vue({ css: false }))

export default {
  ...basicConfig,
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  }
}