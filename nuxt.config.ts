export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    '@nuxt/image'
  ],

  antd: {
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

  build: {
    transpile: ['ant-design-vue', '@ant-design/icons-vue'],
  },

  vite: {
    ssr: {
      noExternal: ['ant-design-vue', '@ant-design/icons-vue'],
    },
  },

  // 使用 SWR 缓存代替 prerender，避免预渲染时丢失 antd 动态样式
  routeRules: {
    '/': { swr: 3600 },
  }
})
