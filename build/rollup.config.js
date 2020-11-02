// import babel from '@rollup/plugin-babel'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from "rollup-plugin-typescript2"
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"
// import cjs from '@rollup/plugin-commonjs'
// import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-css-only'
// import CleanCSS from 'clean-css'
import fs from 'fs'

const config = require('../package.json')

const { name } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

let overrides = { 
  compilerOptions: { declaration: true },
  exclude: [
    "node_modules",
    "src/App.vue",
    "src/main.ts"
  ]
}

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  },
  plugins: [
    nodeResolve(),
    excludeDependenciesFromBundle({ peerDependencies: true, dependencies: false }),
    typescript({ tsconfigOverride: overrides }),
    css({
      output(style) {
        !fs.existsSync('dist') && fs.mkdirSync('dist')
        fs.writeFileSync(`dist/${name}.css`, style)
      }
    }),
  ]
}