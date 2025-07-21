import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Kaspa',
  description: 'Kaspa',

  head: [
    ['link', { 
      rel: 'icon', 
      type: 'image/webp',
      href: '/logo/Kaspa-Icon-32.webp',
      sizes: '32x32'
    }]
  ],

  theme: defaultTheme({
    logo: '/logo/Kaspa-Icon-Dark-Green-on-White.svg',

    contributors: false,

    navbar: [
      '/', 
      '/get-started'
    ],
  }),

  bundler: viteBundler(),
})
