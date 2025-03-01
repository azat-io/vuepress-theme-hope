import { useRouteLocale } from "@vuepress/client";
import { computed, defineComponent, h } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { useThemeLocaleData } from "@theme-hope/composables/index";
import {
  useArticles,
  useStars,
} from "@theme-hope/modules/blog/composables/index";

import type { VNode } from "vue";

import "../styles/article-type.scss";

declare const BLOG_TYPE_INFO: { key: string; path: string }[];

export default defineComponent({
  name: "ArticleType",

  setup() {
    const localePath = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const route = useRoute();
    const articles = useArticles();
    const stars = useStars();

    const types = computed(() => {
      const locale = themeLocale.value.blogLocales;

      return [
        {
          text: locale.all,
          path: articles.value.path,
        },
        { text: locale.star, path: stars.value.path },
        ...BLOG_TYPE_INFO.map(({ key, path }) => ({
          text: locale[key],
          path: path.replace(/^\//, localePath.value),
        })),
      ];
    });

    return (): VNode =>
      h(
        "ul",
        { class: "article-type-wrapper" },
        types.value.map((type) =>
          h(
            "li",
            {
              class: ["article-type", { active: type.path === route.path }],
            },
            h(RouterLink, { to: type.path }, () => type.text)
          )
        )
      );
  },
});
