import db, { sequelize } from '../models';
import logger from "./logger";
// import Common from "../helpers/Common";
import ErrorLogs from "../helpers/ErrorLogs";
import { error } from "winston";
import CST from "../configs/constants";
import { DATE, where, fn, col, Op, Model } from 'sequelize';
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();


// const Object = async (options) => {
//     try {

//     } catch (error) {
//         logger.error(error);
//         console.log(error);
//         await ErrorLogs.AddErrorLog('CreateNewPractise', error);
//         return {data: false, meg: 'Lỗi hệ thống.'};
//     }
// }

const DemoServices = {

}
export default DemoServices;











