import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { commentPlugin } from "vuepress-plugin-comment2";

const base = <"/" | `/${string}/`>process.env.BASE || "/";

export default defineUserConfig({
  base,

  title: "Comment Plugin",
  description: "Comment Plugin for VuePress2",

  // we are using a custom theme adding this plugin
  theme: defaultTheme({
    logo: "/logo.svg",

    repo: "vuepress-theme-hope/vuepress-theme-hope/tree/main/demo/comment2/",

    navbar: ["/", "/test"],
  }),

  plugins: [
    commentPlugin({
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    }),
  ],
});
