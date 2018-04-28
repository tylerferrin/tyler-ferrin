const CONTENTFUL = require('contentful')

const CONFIG = {
  space: process.env.spaceId,
  accessToken: process.env.accessToken
}

module.exports = {
  createClient () {
    return CONTENTFUL.createClient(CONFIG)
  }
}
