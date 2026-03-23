export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    '@nuxt/image'
  ],

  antd: {
    // 开启 SSR 的样式提取，解决生产环境（Vercel）刷新后样式丢失或不生效的问题
    extractStyle: true,
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  
  // 图片优化配置
  image: {
    format: ['webp'],
    quality: 80,
  },

  // Vite 构建优化
  vite: {
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vue')) return 'vue-vendor'
              if (id.includes('ant-design-vue')) return 'antd-vendor'
              return 'vendor'
            }
          }
        }
      }
    }
  },

  // 渲染与路由缓存配置
  routeRules: {
    // 首页由于是静态内容居多，开启预渲染或者 SWR 缓存
    '/': { prerender: true },
    // 或者 '/': { swr: 3600 } // 缓存1小时
  }
})
