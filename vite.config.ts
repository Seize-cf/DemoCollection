import { defineConfig, normalizePath } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer'; // 自动为不同的目标浏览器添加样式前缀
import viteEslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const variablePath = normalizePath(path.resolve('./src/styles/variables.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname),
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  plugins: [
    react(),
    viteEslint(),
    svgr(),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [
        path.join(__dirname, 'src/assets/icons'),
        path.join(__dirname, 'src/assets/imgs')
      ]
    })
  ],
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
  },
  // https://cn.vitejs.dev/config/dep-optimization-options.html
  optimizeDeps: {
    // force: true, // 手动开启预构建
    include: ['react'] // 将 `react` 包强制进行预构建
    // exclude: https://cn.vitejs.dev/config/dep-optimization-options.html#optimizedeps-include
  }
});
