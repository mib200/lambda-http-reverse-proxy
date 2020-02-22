const awsLambdaFastify = require('aws-lambda-fastify')
const app = require('./app');

module.exports.proxy = awsLambdaFastify(app);