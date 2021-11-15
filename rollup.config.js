import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
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
        sourcemap: true
      },
      {
        file: 'dist/index.es.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      image(),
      peerDepsExternal({
        includeDependencies: true
      }),
      resolve(),
      postcss({
        extensions: ['.css'],
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
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.svg'],
        // setting infinite limit will ensure that the files 
        // are always bundled with the code, not copied to /dist
        limit: Infinity
      }),    
    ]
  },
  {
    input: [
      'src/button/index.ts',
      'src/collapse-item/index.ts',
      'src/custom-search-input/index.ts',
      'src/date-picker/index.ts',
      'src/extended-select/index.ts',
      'src/fetch-table/index.ts',
      'src/form/index.ts',
      'src/location-filter/index.ts',
      'src/modal/index.ts',
      'src/modal-button/index.ts',
      'src/icon/index.ts',
      'src/pagination/index.ts',
      'src/scrollbars/index.ts',
      'src/search-input/index.ts',
      'src/select/index.ts',
      'src/time-period-input/index.ts',
      'src/tab-button/index.ts',
      'src/time-picker/index.ts',
      'src/time-range-picker/index.ts',
      'src/custom-search-input/index.ts',
      'src/header/index.ts',
      'src/hooks/index.ts',
      'src/typings/index.ts',
      'src/constants/strings.ts'
    ],
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      },
      {
        dir: 'lib',
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    preserveModules: true,
    plugins: [
      image(),
      peerDepsExternal({
        includeDependencies: true
      }),
      resolve(),
      postcss(),
      typescript({
        rollupCommonJSResolveHack: true,
        useTsconfigDeclarationDir: true,
        clean: true,
        exclude: [
          'node_modules',
          'src/**/*.stories.tsx',
          'src/**/*.test.(tsx|ts)',
          'src/**/*.svg'
        ]
      }),
      commonjs(),
      json()
    ]
  }
];
