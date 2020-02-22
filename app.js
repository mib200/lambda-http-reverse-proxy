const fastify = require('fastify');
const proxy = require('fastify-http-proxy');
const app = fastify();

app.register(require('fastify-cors'), { 
  // put your options here
  origin: '*',
})

app.register(proxy, {
  upstream: process.env.URL,
  // prefix: '/ics',
  http2: false,
  cacheURLs: 0,
});

// app.get('/', (request, reply) => reply.send({ hello: 'world' }));

if (require.main === module) {
  // called directly i.e. "node app"
  app.listen(3000, (err) => {
    if (err) console.error(err);
    console.log('server listening on 3000');
  });
} else {
  // required as a module => executed on aws lambda
  module.exports = app;
}