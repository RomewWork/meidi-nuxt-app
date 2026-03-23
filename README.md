# meidi-nuxt-app

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-002E3B?style=for-the-badge&logo=nuxt.js&logoColor=00DC82)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Ant-Design-Vue](https://img.shields.io/badge/Ant_Design_Vue-0170FE?style=for-the-badge&logo=ant-design&logoColor=white)

基于 Vue3 + Nuxt3 构建的 SSR 电商前端应用。探索服务端渲染与 SEO 优化实战。

## ✨ 特性 (Features)

- 🚀 **Vue 3 & Nuxt 3** - 采用最新组合式 API 与全栈框架，体验极速开发与高性能渲染。
- 🔍 **SEO 友好** - 深度集成服务端渲染 (SSR)，助力电商项目完美收录。
- 🎨 **UI 组件库** - 采用 [Ant Design Vue](https://www.antdv.com/) 构建专业级交互体验。
- 💨 **原子化 CSS** - 融合 [Tailwind CSS](https://tailwindcss.com/) 实现高度定制与灵活样式。
- ⚡ **Vite 驱动** - 极速冷启动，秒级 HMR (热更新)。
- 🖼️ **图片优化** - 集成 `@nuxt/image`，自动优化 WebP 格式与体积。

## 🛠️ 技术栈 (Tech Stack)

- **框架**: `Nuxt 3.4+` / `Vue 3.5+`
- **路由**: `Vue Router`
- **UI 库**: `@ant-design-vue/nuxt`
- **样式**: `Tailwind CSS`

## 📦 安装与运行 (Getting Started)

### 环境要求
确保你的环境中已安装 [Node.js](https://nodejs.org/) (推荐 v18+ 或更高版本)。

### 1. 克隆项目 & 安装依赖

```bash
git clone https://github.com/RomewWork/meidi-nuxt-app.git
cd meidi-nuxt-app

# 安装依赖 (推荐使用 npm 或 pnpm)
npm install
# 或者
pnpm install
```

### 2. 本地开发环境

启动开发服务器，运行在 `http://localhost:3000`

```bash
npm run dev
# 或者
pnpm dev
```

### 3. 构建与生产环境

构建生产环境代码：

```bash
npm run build
# 或者
pnpm build
```

本地预览生产环境构建结果：

```bash
npm run preview
# 或者
pnpm preview
```

## 🚀 部署 (Deployment)

本项目已经过构建优化，支持一键部署到主流 Serverless 平台。
推荐使用 **Vercel** 部署此项目，只需关联 GitHub 仓库即可实现自动化 CI/CD。

- [了解 Nuxt 3 部署文档](https://nuxt.com/docs/getting-started/deployment)
- [Vercel 部署指南](https://vercel.com/docs)
