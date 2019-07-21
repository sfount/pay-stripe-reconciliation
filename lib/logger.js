const winston = require('winston')

const logger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.timestamp(),
        winston.format.simple()
      )
    })
  ]
})

module.exports = logger

