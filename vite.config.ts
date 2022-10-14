import { defineConfig, normalizePath } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer'; // !自动为不同的目标浏览器添加样式前缀
import viteEslint from 'vite-plugin-eslint';

const variablePath = normalizePath(path.resolve('./src/styles/variables.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname),
  plugins: [react(), viteEslint()],
  css: {
    preprocessorOptions: {
      scss: {
        // !additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    modules: {
      generateScopedName: '[path]__[name]__[local]___[hash:base64:5]'
    },
    postcss: {
      plugins: [autoprefixer({})]
    }
  }
});
