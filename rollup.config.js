import typescript from '@rollup/plugin-typescript';
import {terser} from "rollup-plugin-terser";

const entry = type => ({
  input: 'src/hiroshi.ts',
  // 出力指定
  output: {
    dir: `dist/${type}`,
    format: type,
    exports: "named",
    sourcemap: true,
    name: 'Hiroshi',
    entryFileNames: 'hiroshi.js',
  },
  plugins: [
    typescript({
      declarationDir: `dist/${type}`,
    }),
    terser({output: {comments: /@license/i}}),
  ]
});

export default [
  entry('umd'),
  entry('esm'),
]