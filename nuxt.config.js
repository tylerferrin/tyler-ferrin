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
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://fonts.googleapis.com/css?family=Archivo+Narrow:400,400i,500,500i,600,600i,700,700i'
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
	** Hook up env variables
	*/
	env: {
		spaceId: process.env.SPACE_ID,
		accessToken: process.env.ACCESS_TOKEN
	},
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
	plugins: [
		'~/plugins/contentful'
	],
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
