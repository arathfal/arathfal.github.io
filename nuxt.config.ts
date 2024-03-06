// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      title: 'Aradea Atfal Risdianto',
      htmlAttrs: {
        lang: 'en'
      },
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
