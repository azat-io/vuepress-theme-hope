import { usePageData } from "@vuepress/client";
import { defineComponent, h, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { isActiveLink } from "vuepress-shared/client";

import { PrintIcon } from "@theme-hope/modules/info/components/icons";
import { useThemeData } from "@theme-hope/composables/index";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index";

import type { PageHeader } from "@vuepress/shared";
import type { PropType, VNode } from "vue";

import "../styles/toc.scss";

const renderHeader = ({ title, level, slug }: PageHeader): VNode =>
  h(
    RouterLink,
    {
      to: `#${slug}`,
      class: ["toc-link", `level${level}`],
    },
    () => title
  );

const renderChildren = (
  headers: PageHeader[],
  headerDepth: number
): VNode | null => {
  const route = useRoute();

  return headers.length && headerDepth > 0
    ? h(
        "ul",
        { class: "toc-list" },
        headers.map((header) => [
          h(
            "li",
            {
              class: [
                "toc-item",
                { active: isActiveLink(route, `#${header.slug}`) },
              ],
            },
            renderHeader(header)
          ),
          renderChildren(header.children, headerDepth - 1),
        ])
      )
    : null;
};

export default defineComponent({
  name: "TOC",

  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array as PropType<PageHeader[]>,
      default: () => [],
    },

    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2,
    },
  },

  setup(props) {
    const route = useRoute();
    const page = usePageData();
    const metaLocale = useMetaLocale();
    const themeData = useThemeData();
    const toc = ref<HTMLElement>();

    const scrollTo = (top: number): void => {
      toc.value?.scrollTo({ top, behavior: "smooth" });
    };

    onMounted(() => {
      // scroll to active toc item
      watch(
        () => route.hash,
        (hash): void => {
          if (toc.value) {
            // get the active toc item DOM, whose href equals to the current route
            const activeTocItem = document.querySelector(
              `#toc a.toc-link[href$="${hash}"]`
            );

            if (!activeTocItem) return;

            // get the top and height of the toc
            const { top: tocTop, height: tocHeight } =
              toc.value.getBoundingClientRect();
            // get the top and height of the active toc item
            const { top: activeTocItemTop, height: activeTocItemHeight } =
              activeTocItem.getBoundingClientRect();

            // when the active toc item overflows the top edge of toc
            if (activeTocItemTop < tocTop)
              // scroll to the top edge of toc
              scrollTo(toc.value.scrollTop + activeTocItemTop - tocTop);
            // when the active toc item overflows the bottom edge of toc
            else if (
              activeTocItemTop + activeTocItemHeight >
              tocTop + tocHeight
            )
              // scroll to the bottom edge of toc
              scrollTo(
                toc.value.scrollTop +
                  activeTocItemTop +
                  activeTocItemHeight -
                  tocTop -
                  tocHeight
              );
          }
        }
      );
    });

    return (): VNode | null => {
      const tocHeaders = props.items.length
        ? renderChildren(props.items, props.headerDepth)
        : page.value.headers
        ? renderChildren(page.value.headers, props.headerDepth)
        : null;

      return tocHeaders
        ? h("div", { class: "toc-place-holder" }, [
            h("aside", { id: "toc" }, [
              h("div", { class: "toc-header" }, [
                metaLocale.value.toc,
                themeData.value.print === false
                  ? null
                  : h(
                      "button",
                      {
                        class: "print-button",
                        title: "print",
                        onClick: () => {
                          window.print();
                        },
                      },
                      h(PrintIcon)
                    ),
              ]),
              h("div", { class: "toc-wrapper", ref: toc }, [tocHeaders]),
            ]),
          ])
        : null;
    };
  },
});
