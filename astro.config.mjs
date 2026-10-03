// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { siteConfig } from './src/config.ts';
import rehypeFigure from './src/lib/rehype-figure.mjs';

/*
 * GitHub Pages compatibility
 * --------------------------
 * The GitHub Actions workflow passes SITE_URL and BASE_PATH, read from
 * the repository's Pages settings. This means the same code works for:
 *   - https://<user>.github.io/              (BASE_PATH is empty)
 *   - https://<user>.github.io/<repository>/ (BASE_PATH is /<repository>)
 *   - a custom domain such as https://sheracreates.com
 * Locally, the values from src/config.ts are used.
 */
const site = process.env.SITE_URL || siteConfig.siteUrl;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
  markdown: {
    // Markdown images with a title become <figure> + caption.
    processor: unified({ rehypePlugins: [rehypeFigure] }),
  },
});
