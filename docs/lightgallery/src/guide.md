---
title: Guide
icon: creative
---

This plugin will use lightgallery make the pictures in the body of the page enter the preview mode when clicked.

<!-- more -->

::: danger LICENSE RESTRICTIONS

Please note that although this plugin release under MIT license, we are currently making this possible with a built-in [organization license of lightgallery](https://www.lightgalleryjs.com/license/) of VuePress Theme Hope, and we would like to admit you are a member of our organization if you are using it for non-commercial usage.

The organization license has no limit for you under non-commercial usage as it supports unlimited developers and unlimited products. You are safe to publish your docs or project with this plugin under ANY License.

But PLEASE DO AWARE that organizational license can only be used on one product. To use this plugin for commercial usage, since lightgallery is under [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you must put your source code under the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) license, or consider [purchasing a license](https://www.lightgalleryjs.com/license/) to avoid troubles.

YOU ARE WARNED!

If you are worried about this, please consider using <ProjectLink name="photo-swipe">vuepress-plugin-photo-swipe</ProjectLink> instead.

:::

## Demo

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/image/1.jpg" />
  <img src="/assets/image/2.jpg" />
  <img src="/assets/image/3.jpg" />
</div>

<style>
  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 33.3% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->
