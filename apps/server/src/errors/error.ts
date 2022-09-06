import { Request, Response, NextFunction } from 'express'
import ApiError from './ApiError'
import config from '~/config/config'
import { logger } from '~/utils/loggers'

export const errorHandler = (err: ApiError, _req: Request, res: Response, _next: NextFunction) => {
  const { statusCode, message } = err

  const response = {
    code: statusCode,
    message,
    ...(config.isDev && { stack: err.stack }),
  }

  if (config.isDev) {
    logger.error(err)
  }

  res.status(statusCode).send(response)
}
