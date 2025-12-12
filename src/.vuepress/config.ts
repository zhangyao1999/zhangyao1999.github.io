import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "首页",
  description: "首页",

  theme,

  // plugins: [
  //   searchPlugin({
  //     // 配置项
  //     maxSuggestions: 10,
  //     getExtraFields: (page) => page.frontmatter.tags ?? [],
  //   }),
  // ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

