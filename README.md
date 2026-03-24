# CmsContent

基于 Nuxt 3 + Vue 3 + Element Plus + MongoDB 的 CMS 系统

## 技术栈

- **前端框架**: Vue 3 + Nuxt 3 (SSR)
- **UI 组件库**: Element Plus
- **服务端**: Nitro (Nuxt 3 内置)
- **数据库**: MongoDB + Mongoose
- **多语言**: @nuxtjs/i18n

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 到 `.env` 并修改配置：

```env
MONGODB_URI=mongodb://localhost:27017/cmscontent
NUXT_PORT=3000
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 4. 构建生产版本

```bash
npm run build
npm run preview
```

## 项目结构

```
cmsContent/
├── app.vue              # 应用入口
├── nuxt.config.ts       # Nuxt 配置
├── package.json         # 依赖管理
├── .env                 # 环境变量
├── components/          # Vue 组件
├── composables/         # 组合式函数
├── layouts/             # 布局文件
├── pages/               # 页面路由
├── server/              # Nitro 服务端
│   ├── api/             # API 路由
│   └── utils/           # 服务端工具
├── stores/              # Pinia 状态管理
├── i18n/                # 多语言配置
├── utils/               # 工具函数
└── types/               # TypeScript 类型
```

## 功能特性

- ✅ SSR 服务端渲染
- ✅ Element Plus UI 组件
- ✅ 多语言支持 (i18n)
- ✅ MongoDB 数据库连接
- 🚧 用户认证
- 🚧 内容管理
- 🚧 媒体库

## 开发计划

1. **第一阶段**: 跑通 SSR Demo ✅
2. **第二阶段**: 用户认证系统
3. **第三阶段**: 内容管理功能
4. **第四阶段**: 媒体库功能

## License

MIT
