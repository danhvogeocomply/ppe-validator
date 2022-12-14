import morgan from 'morgan'
import { Request, Response } from 'express'
import config from '~/config/config'
import logger from './logger'

morgan.token('message', (_req: Request, res: Response) => res.locals['errorMessage'] || '')
const getIpFormat = () => (config.isProduction ? ':remote-addr - ' : '')
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`

const successHandler = morgan(successResponseFormat, {
  skip: (_req: Request, res: Response) => res.statusCode >= 400,
  stream: { write: (message: string) => logger.info(message.trim()) },
})

const errorHandler = morgan(errorResponseFormat, {
  skip: (_req: Request, res: Response) => res.statusCode < 400,
  stream: { write: (message: string) => logger.error(message.trim()) },
})

const handlers = { successHandler, errorHandler }
export default handlers
