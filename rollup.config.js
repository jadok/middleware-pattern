import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import { eslint } from 'rollup-plugin-eslint';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: process.env.NODE_ENV !== 'production' },
    { file: pkg.module, format: 'es', sourcemap: process.env.NODE_ENV !== 'production' }
  ],
  plugins: [
    eslint(),
    babel()
  ]
}
