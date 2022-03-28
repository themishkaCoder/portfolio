export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    // ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: "https://fonts.gstatic.com"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"}
    ],
    script: [
      { src: 'https://kit.fontawesome.com/652b1d332c.js', crossorigin: "anonymous" }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/aos.js',
      ssr: false,
    }
  ],
  // target: 'static',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  purgeCSS: { whitelist: [ "aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "fade-left", "fade-right", "flip-left", ], }
}
