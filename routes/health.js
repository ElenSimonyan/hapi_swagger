'use strict'
var routes = []

var tooBusy = require("toobusy-js")

routes.push({
  method: 'GET',
  path: '/_health/',
  config:{
    description: 'Health Check',
    tags: ['api','lsq','Health'],
    handler: function (request, reply) {
      reply(tooBusy.lag()+"")
    }
  }
})

module.exports = routes