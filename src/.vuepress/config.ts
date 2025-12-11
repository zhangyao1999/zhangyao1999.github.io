import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "坚持的秘诀就是无视中断",
  description: "坚持的秘诀就是无视中断",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
