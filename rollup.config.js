import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';

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
    // npmモジュールを`node_modules`から読み込む
    nodeResolve({main: true}),
    // CommonJSモジュールをES6に変換
    typescript({
      declarationDir: `dist/${type}`,
    }),
    commonjs(),
    babel({
      "presets": [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "usage",
            "corejs": 3,
            "targets": {
              "ie": "11"
            }
          }
        ]
      ]
    }),
    terser({output: {comments: /@license/i}}),
  ]
});

export default [
  entry('umd'),
  entry('esm'),
]