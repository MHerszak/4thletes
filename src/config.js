require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    brand: 'Sponsors4Athletes',
    title: 'Sponsors4Athletes',
    description: 'Our goal is to find the right sponsor 4 you.',
    developer: 'www.base2industries.com',
    head: {
      titleTemplate: 'Sponsors4Athletes: %s',
      meta: [
        { name: 'description',
          content: 'Sponsors4Athletes wants to connect you with brands and shops in your area to help them help you.' },
        { name: 'twitter:card',
          content: 'Sponsors4Athletes wants to connect you with brands and shops in your area to help them help you.' },
        { name: 'twitter:title', content: 'Build your Proof of Concept' },
        { name: 'twitter:creator', content: '@mherszak' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Sponsors4Athletes' },
        { property: 'og:image', content: 'https://s3-us-west-2.amazonaws.com/sponsors4athletes/images/4thletes.png' },
        { property: 'og:url', content: 'https://www.sponsors4athletes.com' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'A new way to connect with brands.' },
        { property: 'og:description',
          content: 'Sponsors4Athletes wants to connect you with brands and shops in your area to help them help you.' },
        { property: 'og:card',
          content: 'Sponsors4Athletes wants to connect you with brands and shops in your area to help them help you.' },
        { property: 'og:site', content: '@mherszak' },
        { property: 'og:creator', content: '@mherszak' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  }
}, environment);
