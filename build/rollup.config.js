// import babel from '@rollup/plugin-babel'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import typescript from '@rollup/plugin-typescript'
// import cjs from '@rollup/plugin-commonjs'
// import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-css-only'
// import CleanCSS from 'clean-css'
import fs from 'fs'

const config = require('../package.json')

const { name } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

export default {
  input: 'src/index.js',
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  },
  plugins: [
    nodeResolve(),
    // typescript(),
    css({
      output(style) {
        !fs.existsSync('dist') && fs.mkdirSync('dist')
        fs.writeFileSync(`dist/${name}.css`, style)
      }
    }), 
    // replace({
    //   VERSION: JSON.stringify(version)
    // })
  ]
}