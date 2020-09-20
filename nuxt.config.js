export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'nuxt-tailwind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Nuxt-Tailwind Example and Playgound' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    config: {
      future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
      }
    }
  },
  generate: {
    fallback: true,
  },
  modules: [
    '@nuxtjs/axios'
  ]
}
