require('dotenv').config();
require('winston-daily-rotate-file');
const path = require('path');
const winston = require('winston')
const pathfile = process.env.LOG_FILE_PATH || '/home/dttc/Documents/Log'
/**
 * create new log file everyday
 * logile over 20mb then create new other logfile
 */
var transport = new winston.transports.DailyRotateFile({
  filename: pathfile + '/logs-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

let logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
      ),
    transports: [
      transport
    ]
})

export default logger;
