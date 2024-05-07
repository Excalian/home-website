import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.excalian.com",
  integrations: [
    starlight({
      title: "Excalian's HomePage",
      pagefind: false,
      description: "The homepage of my website",
      logo: {
        src: './src/assets/logo.png'
      },
      sidebar: [
        {label: 'Now', link: '/now', badge: {text: 'Broken', variant: 'danger'}},
        {
          label: 'About Me',
          items: [
            {label: 'Social Links', link: '/about/socials'},
            {label: 'My Education', link: '/about/education'},
            {label: 'My Work', link: '/about/work'},
          ],
        },
        {label: 'Documentation', link: 'https://docs.excalian.com', badge: {text: 'Redirect', variant: 'tip'}},
      ],
      customCss: ['./src/tailwind.css'],
      lastUpdated: false,
      favicon: './favicon.ico',
      plugins: [
        starlightBlog({
          title: "Excalian's Blog",
          authors: {
            excalian: {
              name: "Marcellino Abdelmalak",
              title: "Full-Time Student",
              picture: './src/assets/large_logo.png',
              url: "https://www.excalian.com/"
            },
            yavko: {
              name: "Yavor Kolev",
              picture: './src/assets/authors/yavko.png',
              url: "https://yavko.com/"
            }
          },
          // prevNextLinksOrder: 'chronological',
          prefix: 'blog',
        })
      ]
    }),
    tailwind({
	    applyBaseStyles: false,
    }),
  ],
});