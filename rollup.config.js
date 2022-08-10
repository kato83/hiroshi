import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';

export default [
    {
        input: 'src/index.ts',
        // 出力指定
        output: {
            dir: "dist/umd",
            format: 'umd',
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
                declarationDir: "dist/umd",
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
    },
    {
        input: "src/index.ts",
        preserveModules: true,
        output: {
            dir: "dist/esm",
            format: "es",
            exports: "named",
            sourcemap: true,
            entryFileNames: 'hiroshi.js',
        },

        plugins: [
            typescript({
                declarationDir: "dist/esm",
            }),
            terser({output: {comments: /@license/i}}),
        ],
    },
]