const fs = require('fs');
import initDemoRouter from './route/DemoRouter';

import logger from './services/logger';
require('dotenv').config();

const initRouter = (app) => {
    initDemoRouter(app);
}

const initDirection = () => {
    console.log('creating : ', process.env.DOC_FILE_PATH);
    fs.mkdir(process.env.DOC_FILE_PATH, { recursive: true }, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("Tạo thư mục thành công!");
        }
    });

    console.log('creating : ', process.env.LOG_FILE_PATH);
    fs.mkdir(process.env.LOG_FILE_PATH, { recursive: true }, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("Tạo thư mục thành công!");
        }
    });

}
const init = {
    initRouter,
    initDirection
}
export default init;