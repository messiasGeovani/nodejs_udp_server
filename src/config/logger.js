// winston module import
const winston = require('winston')

// logger configuration
exports.Logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            filename: 'tmp/error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'tmp/combined log'
        })
    ]
})