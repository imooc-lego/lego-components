import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'
import fs from 'fs'

const config = require('../package.json')

const { name, version } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

export default {
  input: 'src/index.js',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve({
      mainFields: ['module', 'jsnext:main', 'main', 'browser'],
      extensions: ['.vue', '.js']
    }),
    vue({
      css: false
    }),
    css({
      output(style) {
        !fs.existsSync('dist') && fs.mkdirSync('dist')
        fs.writeFileSync(`dist/${name}.css`, new CleanCSS().minify(style).styles)
      }
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
    }),
    cjs(),
    replace({
      VERSION: JSON.stringify(version)
    })
  ],
  watch: {
    include: 'src/**'
  }
}