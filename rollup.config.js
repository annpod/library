import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
// import svg from 'rollup-plugin-svg';
import image from '@rollup/plugin-image';
// import url from "rollup-plugin-url"
// import multi from '@rollup/plugin-multi-entry';
const packageJson = require('./package.json');
// import multiInput from 'rollup-plugin-multi-input';

export default [{
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: 'build/index.es.js',
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    image(),
    peerDepsExternal({
      includeDependencies: true
    }),
    resolve(),
    postcss(),
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: true,
      clean: true,
      exclude: [
        'src/**/*.stories.tsx',
        'src/**/*.test.(tsx|ts)',
        'src/**/*.stories.tsx',
        'src/**/*.svg'
      ]
    }),
    commonjs(),
    json()
  ]
},
{
  input: ['src/index.tsx'],
  output: [
    {
      dir: 'build',
      format: 'cjs',
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
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: true,
      clean: true,
      exclude: [
        'src/**/*.stories.tsx',
        'src/**/*.test.(tsx|ts)',
        'src/**/*.stories.tsx',
        'src/**/*.svg'
      ]
    }),
    commonjs(),
    json()
  ]
}
];
