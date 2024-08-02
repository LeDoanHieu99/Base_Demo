import express from 'express';
import init from './init';

require('express-async-errors');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

require('dotenv').config();
var morgan = require('morgan')

const cors = require('cors')
const app = express();
const port = process.env.PORT || 8083;

app.disable('X-powered-by');
app.use(cors())

app.use((req, res, next) => {
    //console.log('>>> run into my middleware')
    //console.log(req)
    next();
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((err, req, res, next) => {
    if (typeof req.body !== undefined) {
        if (typeof req.body !== 'object' || req.body === null) {
            throw new CusError('Dữ liệu không hợp lệ.')
        }
    }
    else { throw new CusError('Dữ liệu không hợp lệ.')}
    console.log("Dữ liệu không phải là JSON hợp lệ.")
});

init.initRouter(app);
init.initDirection();

app.use((req, res) => {
    // return res.render('404.ejs')
    return res.send('Lỗi hệ thống.')
})

app.listen(port, () => {
    console.log(`Open swagger at http://localhost:${port}/docs`)
})

