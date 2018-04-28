module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tyler Ferrin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tyler Ferrin and his portfolio of software engineering'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/pug.png' },
			{ rel: 'stylesheet', type: 'text/css', src: '~/assets/global.scss' },
      {
        rel: 'stylesheet',
        type: 'text/css'
      }
    ]
  },
  /*
  ** Customize the router middleware
  */
  router: {
    middleware: 'pages'
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
