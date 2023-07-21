import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';
import icon from 'astro-icon';
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://qenthep.github.io',
	integrations: [
		alpinejs(),
		tailwind(),
		mdx(),
		icon({
			include: {
				academicons: ['*'],
				heroicons: ['*'],
				logos: ['*'],
			},
		}),
	],
	experimental: {
		assets: true,
		viewTransitions: true,
	},
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkMath, remarkEmoji],
		rehypePlugins: [rehypeKatex],
	},
});
