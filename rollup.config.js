import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import postcssFontGrabber from 'postcss-font-grabber';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import copy from "rollup-plugin-copy";
import url from 'rollup-plugin-url';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        assetFileNames: "[name][extname]"
      },
      {
        file: 'dist/index.es.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        assetFileNames: "[name][extname]"
      },
      
    ],
    plugins: [
      image(),
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.woff', '**/*.ttf', '**/*.eot', '**/*.svg'],
        // setting infinite limit will ensure that the files 
        // are always bundled with the code, not copied to /dist
        limit: Infinity
      }),
      peerDepsExternal({
        includeDependencies: true
      }),
      resolve(),
      postcss({
        extensions: ['.css'],
        extract: true,
        plugins: [
          postcssFontGrabber({
            // postcss-font-grabber needs to know the CSS output
            // directory in order to calculate the new font URL.
            cssDest: 'dist/',
            fontDest: 'dist/assets/fonts/',
          }),
        ],
      }),
      typescript({
        emitDeclarationTrue: true,
        useTsconfigDeclarationDir: false,
        rollupCommonJSResolveHack: true,
        clean: true,
        exclude: [
          'node_modules',
          'src/**/*.test.(tsx|ts)',
          'src/**/*.svg',
          "*.d.ts",
          "**/*.d.ts"
        ]
      }),
      commonjs(),
      json(),
      copy({
        targets: [{ src: 'src/assets', dest: 'dist' }]
      }),          
    ]
  },

];
