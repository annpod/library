import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
// import svg from 'rollup-plugin-svg';
import image from '@rollup/plugin-image';
// import url from "rollup-plugin-url"

// const packageJson = require('./package.json');

export default {
  input: ['lib/index.tsx'],
  output: [
    {
      dir: "build",
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    // {
    //   file: packageJson.module,
    //   format: 'esm',
    //   exports: 'named',
    //   sourcemap: true
    // }
  ],
  preserveModules: true,
  plugins: [
    image(),
    // svg(),    
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
        'lib/**/*.stories.tsx',
        'lib/**/*.test.(tsx|ts)',
        'lib/**/*.stories.tsx',
        'lib/**/*.svg'
      ]
    }),
    commonjs(),
    json()
  ]
};
