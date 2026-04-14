import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://caramelotech.github.io',
  base: '/qa-labs',
  integrations: [
    starlight({
      title: 'QA Labs',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/caramelotech/qa-labs',
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: { label: 'Portugues', lang: 'pt-BR' },
      },
    }),
  ],
});
