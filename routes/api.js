const routes = []
const lsq = require('lsq')
const Joi = require('joi')
let config

lsq.config.get()
    .then((c) => {
        config = c
    })


routes.push({
  method: 'GET',
  path: '/_config/',
  config:{
    description: 'Get config',
    tags: ['api','lsq','config'],
    handler:  (request, reply) => {
      reply(config)
    }
  }
})

routes.push({
  method: 'GET',
  path: '/api/hello/',
  config:{
    description: 'Hello World',
    tags: ['api','lsq','hello'],
    handler: (request, reply) => {
      reply('Hello World!')
    }
  }
})
routes.push({
    method: 'POST',
    path:'/api/{id}',
    config: {
        description: 'Joi validation',
        tags: ['api'],
        validate: {
            params: {
                id: Joi.string().min(3).max(100).required()
            }
        },
        handler: (request, reply) => {
            reply('id is validated')
        }
    }
});
module.exports = routes