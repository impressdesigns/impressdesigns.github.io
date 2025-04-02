import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://impressdesigns.dev',
	integrations: [
		starlight({
			title: 'Impress Designs',
			logo: {
				src: './src/assets/impress-designs.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/impressdesigns/',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
