'use strict'
const routes = []

const tooBusy = require("toobusy-js")

routes.push({
  method: 'GET',
  path: '/health',
  config:{
    description: 'Health Check',
    tags: ['api','lsq','Health'],
    handler: (request, reply) => {
      reply(tooBusy.lag()+"")
    }
  }
})

module.exports = routes
