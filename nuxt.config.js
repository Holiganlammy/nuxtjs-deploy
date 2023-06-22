export default {
  mode :'universal',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  router:{
    base : '/nuxtjs-deploy'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content','@nuxtjs/axios','@nuxtjs/auth'],

  axios: {
    baseURL: 'http://localhost:12345/api',
  },
  auth:{
      strategies:{ // local เป็น strategies
        local:{
          endpoints:{ //กำหนดออชั่นของ loginWith ฟังกชั่น this.$auth.loginWith('local',)
            login:{
              method:'post',
              url:'login', //รวมกับ base url
              propertyName:'token' //นำ token เก็บไว้ใน Storerage
            },
            user:{
              method:'get',
              url:'me',
              propertyName:'user'
            },
            logout:false,
          }
        }
      },
      redirect:{ // ถ้าเรากำหนด auth แล้ว users ไม่ได้ล็อคอินจะเด้งมาหน้าล็อคอิน
        login :'/login'
      }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
