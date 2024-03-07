// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-delay-hydration'],
  delayHydration: {
    mode: 'init',
    debug: process.env.NODE_ENV === 'development'
  },
  colorMode: {
    classSuffix: ''
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Aradea Atfal - Front End Engineer',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'ie=edge'
        },
        {
          property: 'og:locale',
          content: 'id_ID'
        },
        {
          name: 'keywords',
          content:
            'Aradea, Atfal, Ridianto, Aradea Atfal Ridianto Frontend, Front-End, Developer, Engineer, ReactJS, NextJS, Shipper'
        },
        {
          name: 'author',
          content: 'Aradea Atfal Risdianto'
        },
        {
          name: 'description',
          content:
            "This is Aradea Atfal's personal website. Get to know and explore all about Aradea Atfal"
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    }
  }
})
