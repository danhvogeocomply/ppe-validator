import winston from 'winston'
import config from '~/config/config'

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack })
  }
  return info
})

const logger = winston.createLogger({
  level: config.isDev ? 'debug' : 'info',
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
  ],
  format: winston.format.combine(
    enumerateErrorFormat(),
    config.isDev ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf((info) => `${info.level}: ${info.message}`),
  ),
})

export default logger
