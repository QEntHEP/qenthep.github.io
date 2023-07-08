import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs';

export default defineConfig({
	site: 'https://qenthep.github.io',
	integrations: [tailwind(), mdx()],
	experimental: {
		assets: true,
	},
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkMath, remarkEmoji],
		rehypePlugins: [rehypeKatex],
	},
});
