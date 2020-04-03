
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth', method: 'post', propertyName: 'token' 
          },
          user: {
            url: 'users/me', method: 'get', propertyName: 'data' 
          },
          logout: {
            url: 'logout', method: 'get' 
          },
        }
      }
    },
    redirect: {
      login: 'auth',
      home: '/'
    }
  },
  /*
  ** Nuxt.js modules
  */
 modules: [
   // Doc: https://bootstrap-vue.js.org
   'bootstrap-vue/nuxt',
   
   '@nuxtjs/axios',
   
   "@nuxtjs/auth"
  ],
  axios: {
    // proxyHeaders: false
    proxy: true,
    // baseURL: 'http://localhost:3900'
    prefix: '/api'
  },
  proxy: {
    '/api/': 'http://localhost:3900',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extractCSS: true,
    extend (config, ctx) {
    }
  }
}
