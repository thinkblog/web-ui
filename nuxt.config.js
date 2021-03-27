import axios from './plugins/axios'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '指尖魔法屋' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  generate: {
    dir: 'docs',
    routes() {
      return new Promise(async resolve => {
        let routes = [];
        let current = 0;
        let pageNum = -1;
        while (current !== pageNum) {
          current++;
          let data = await axios.get('/post/list', {
            params: {
              current
            }
          });
          pageNum = data.pages;
          current = data.current;
          let list = data.records;
          routes.push(`/page/${current}`)
          routes = routes.concat(list.map(item => {
            return '/post/' + item.cid
          }))
          console.log(routes)
        }
        resolve(routes)
      })
    }
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
