export default defineNuxtConfig({
  modules: ["@element-plus/nuxt", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "zh-CN",
        name: "简体中文",
        file: "zh-CN.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
    defaultLocale: "zh-CN",
    lazy: true,
    langDir: "i18n/",
    strategy: "no_prefix",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "CmsContent",
      titleTemplate: "%s | CmsContent",
      meta: [
        {
          name: "description",
          content: "CmsContent 是一个基于 Nuxt 3 构建的现代化内容管理系统",
        },
        {
          name: "keywords",
          content: "cms, content management, nuxt, vue, ssr",
        },
        { name: "author", content: "CmsContent Team" },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "CmsContent" },
        {
          property: "og:description",
          content: "CmsContent 是一个基于 Nuxt 3 构建的现代化内容管理系统",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2026-03-24",
});
