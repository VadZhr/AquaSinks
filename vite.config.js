import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rollup/plugin-babel';
import postcssConfig from './postcss.config.js';

// import postcssConfig from './postcss.config.js';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
