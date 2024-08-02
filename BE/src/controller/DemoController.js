import StatusCodes from 'http-status-codes';
import CusResponse from '../responses/cusResponse';
import CusError from '../middlerware/ErrorValidator';
import logger from '../services/logger';
import CST from "../configs/constants";
import DemoServices from '../services/DemoServices';

require('dotenv').config();


// const Object = async (req, res) => {
//     // #swagger.tags = ['Demo']
//     // #swagger.summary = 'Nội dung API'
//     let options = { };
//     let result = await PractiseServices.DeleteFileByID(options);
//     if (!result.data) {
//         throw new CusError(StatusCodes.BAD_REQUEST, result.meg);
//     }
//     return res.status(StatusCodes.OK).json(new CusResponse(true, true, 'Nội dung API thành công.', result.data));
// }

const DemoController = {

}
export default DemoController;
