import db, { sequelize } from '../models';
import logger from '../services/logger';
import { error } from "winston";
import CST from "../configs/constants";
import { DATE, where, fn, col, Op, Model } from 'sequelize';
const { v4: uuidv4 } = require('uuid');
const moment = require("moment-timezone");

const AddErrorLog = async (api, errorLogs) => {
    try {
        let time = moment().utcOffset('+0700').format('HH:mm:ss, DD/MM/YYYY');
        console.log('AddErrorLog');
        await db.ErrorLog.create({
            id: uuidv4(),
            api: api,
            time: time,
            error_meg: errorLogs.message,
            error_log: errorLogs
        });

    } catch (error) {
        logger.error(error);
        console.log(error);
        return {data: false, meg: 'Lỗi hệ thống AddErrorLog.'};
    }
}



// const Object = async (options) => {
//     try {

//     } catch (error) {
//         logger.error(error);
//         console.log(error);
//         return {data: false, meg: 'Lỗi hệ thống.'};
//     }
// }

const ErrorLogs = {
    AddErrorLog
}

export default ErrorLogs;