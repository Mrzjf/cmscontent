# CmsContent - Agent 项目指南

## 项目概述

- **项目名称**: CmsContent
- **项目类型**: 单体式 CMS 系统
- **架构**: SSR (服务端渲染)
- **当前状态**: 第一阶段 SSR Demo 已跑通

## 技术栈

- **前端框架**: Vue 3.4 + Nuxt 3.10.3
- **服务端**: Nitro (Nuxt 3 内置)
- **样式**: Tailwind CSS (可选)
- **多语言**: @nuxtjs/i18n 8.3.0

## 项目结构

```
cmsContent/
├── agent.md          # 本项目指南
├── README.md         # 项目说明
├── nuxt.config.ts    # Nuxt 配置
├── package.json      # 依赖管理
├── .env              # 环境变量
├── app.vue           # 应用入口
├── i18n/             # 多语言配置
│   ├── zh-CN.json    # 简体中文
│   └── en.json       # 英文
├── layouts/          # 布局文件
│   └── default.vue   # 默认布局
└── pages/            # 页面路由
    ├── index.vue     # 首页
    └── about.vue     # 关于页面
```

## 功能特性

### 已实现 ✅

- SSR 服务端渲染
- 多语言支持 (i18n) - 支持中文、英文
- 基础页面结构 (首页、关于页)
- SEO 基础配置 (meta tags, title template)

### 待实现 🚧

- MongoDB 数据库连接
- 用户认证系统
- 内容管理功能
- 媒体库
- API 路由

## 开发阶段

### 第一阶段：SSR Demo 跑通 ✅

- 目标：验证 Nuxt 3 + i18n 的基础架构
- 状态：已完成

### 第二阶段：数据库与 API (计划中)

- MongoDB 连接配置
- 基础 API 路由
- 数据模型设计

### 第三阶段：用户认证 (待定)

- 登录/注册功能
- 权限管理

### 第四阶段：内容管理 (待定)

- 内容创建/编辑/删除
- 分类管理
- 富文本编辑器

### 第五阶段：媒体库 (待定)

- 文件上传
- 图片管理

## 代码规范

- **开发语言**: 中文
- **代码注释**: 中文注释
- **文件命名**: 小写 + 连字符 (kebab-case)
- **组件命名**: PascalCase

## 多语言配置

- **默认语言**: 中文 (zh-CN)
- **支持语言**: 中文 (zh-CN)、英文 (en)
- **策略**: no\_prefix (无 URL 前缀)
- **懒加载**: 启用

### 当前翻译键值

```json
{
  "welcome": "欢迎使用 CmsContent",
  "description": "这是一个基于 Nuxt 3 的 CMS 系统",
  "home": "首页",
  "about": "关于",
  "language": "语言",
  "switchLanguage": "切换语言",
  "loading": "加载中...",
  "error": "出错了",
  "success": "成功"
}
```

## 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 生产预览
npm run preview

# 生成静态站点
npm run generate
```

## 环境变量

```env
# MongoDB (待配置)
MONGODB_URI=mongodb://localhost:27017/cmscontent

# 应用端口
NUXT_PORT=3000
```

## SEO 配置

- Charset: utf-8
- Viewport: width=device-width, initial-scale=1
- Title Template: `%s | CmsContent`
- Meta: description, keywords, author, robots, Open Graph, Twitter Card

## 依赖版本

| 依赖           | 版本     |
| ------------ | ------ |
| nuxt         | 3.10.3 |
| vue          | ^3.4.0 |
| @nuxtjs/i18n | ^8.3.0 |
| typescript   | ^5.3.0 |

