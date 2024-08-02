const swaggerAutogen = require('swagger-autogen')()
require('dotenv').config();
var url = 'localhost:3007';
var protocol = 'http'
if (process.env.NODE_ENV === 'test') {
  url = process.env.HOST;
  protocol = 'https'
}

const doc = {
  info: {
    title: 'APIv1',
    description: 'botAI'
  },
  host: url,
  schemes: [protocol],
};

const outputFile = './swagger_output.json'
const endpointsFiles = [
  './src/route/DemoRouter.js',
]

swaggerAutogen(outputFile, endpointsFiles, doc);
