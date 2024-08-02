import logger from '../services/logger';
import StatusCodes from 'http-status-codes'
module.exports = class CusError extends Error {
    constructor(code, message){
        super();
        this.status = code || StatusCodes.BAD_REQUEST;
        this.messageObject = message;
        // log error
        var msglog = {
            Code: this.status,
            Msg: message
        }
        logger.error(msglog);
    }
};