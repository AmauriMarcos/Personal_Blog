
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alegreya+Sans:wght@100;300;500;800;900&family=Anton&family=B612:wght@400;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,900&display=swap'},

 
   /*    {rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap" }, */
   /*    {rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" }, */
   /*    {rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;0,900;1,700&display=swap" }, */
     /*  {rel: 'stylesheet'}, {href:"https://fonts.googleapis.com/css2?family=B612:wght@700&family=Ubuntu:wght@700&display=swap" }, */
     

    ]
  },
 /*  serverMiddleware: ["~/api/index"], */
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
 plugins: [
  '@/plugins/disqus',
 /*  {src: '~/plugins/vue-notification.js', ssr: false} */
  
],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/toast',
  ],

 /*  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'Thank you!',
        message: 'The message was sent successfully',
        options: {
          type: 'success'
        }
      }
    ]
}, */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
