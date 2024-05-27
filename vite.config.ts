import path from 'path'; //这个path用到了上面安装的@types/node

import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/order
import { defineConfig } from 'vite';
// const resolve = (dir: string) => path.join(__dirname, dir);

import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

const fePort = 1118;
const serverOrigin = 'http://localhost:1231';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  //这里进行配置别名
  resolve: {
    alias: {
      '@': path.resolve('./src'), // @代替src
      '#': path.resolve('./types') // #代替types
    }
  },
  // 服务器设置
  server: {
    cors: true, // 默认启用并允许·任何源
    host: '0.0.0.0', // 指定服务器主机名
    port: fePort, // 指定服务端口号
    open: true, // 运行自动打开浏览器
    // https: false, // 关闭https
    strictPort: true, // 若3030端口被占用,直接结束项目
    proxy: {
      // 选项写法
      '^/api': {
        target: serverOrigin,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/mixins.scss";'
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router']
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
});
