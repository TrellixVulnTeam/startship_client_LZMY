export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'starship',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css',
    '@/assets/sass/theme/_color-mode.scss',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vuesax.js",
    "~/plugins/vee-validate.js",
    "~/plugins/vue-chat-scroll.js",
    "~/plugins/infiniteloading.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode'
  ],

  styleResources: {
    scss: [
      './assets/sass/utilities/_variables.scss', // sass variable
      './assets/sass/utilities/_mixins.scss', // sass mixin method
      './assets/sass/utilities/_breakpoints.scss', // sass responsive breakpoint
      './assets/sass/_main.scss', // use underscore "_" & also file extension ".scss"
      './assets/sass/theme/_color-mode.scss', // dark-light color variable
      './assets/sass/theme/_transitions.scss' // transition animation
    ]
  },

  // Google fonts
  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 900],
        ital: [100]
      },
      // Dangrek: {
      //   wght: [100, 200, 300, 400, 500, 600, 700],
      //   ital: [100]
      // },
      // Bokor: {
      //   wght: [100, 200, 300, 400, 500, 600, 700, 900],
      //   ital: [100]
      // },
      Battambang: {
        wght: [100, 200, 300, 400, 500, 600, 700, 900],
        ital: [100]
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    'nuxt-socket-io',
    '@nuxtjs/dayjs',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'POST', propertyName: 'token' },
          logout: false,
          user: { url: '/user/me', method: 'GET', propertyName: 'user' },
          tokenRequired: true,
          tokenType: 'Bearer',
          csrf: {
            url: '/auth/login'
          }
        }
      }
    },
    redirect: {
      login: '/signin',
      logout: '/',
      user: '/messages',
      callback: '/signin'
    }
  },

  axios: {
    name: 'main',
    baseURL: "http://localhost:5000/api",  // here set your API url
    // proxy: true
  },

  // socket.io module
  io: {
    sockets: [{
      name: 'home',
      url: 'http://localhost:5000', // IO server lives here
      default: true,
      // vuex: {
      //   mutations: [{
      //     sendMessage: 'ADD_MESSAGE',
      //     getMessage: 'ADD_MESSAGE'
      //   }]
      // }
    }]
  },

  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: ['relativeTime', 'advancedFormat'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  }
}
