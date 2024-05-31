import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rollup/plugin-babel';
import postcssConfig from './postcss.config.js';

// import postcssConfig from './postcss.config.js';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Убедитесь, что расширения включают все файлы, которые нужно обрабатывать
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // Добавьте расширения для разрешения модулей
  },
  base:'/',
  build: {
    assetsInlineLimit: 0, // Установите лимит в 0, чтобы предотвратить инлайнинг изображений
  },
  css:{
    postcss:postcssConfig
  }
})
