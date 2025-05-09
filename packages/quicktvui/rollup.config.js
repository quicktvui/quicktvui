import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'es',
  },
  plugins: [
    typescript(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    postcss({
      extract: 'index.css',
    }),
    terser(),
    commonjs(),
    resolve(),
  ],
  external: ['@extscreen/es3-vue', 'vue', '@extscreen/es3-core', '@extscreen/es3-component'],
}
