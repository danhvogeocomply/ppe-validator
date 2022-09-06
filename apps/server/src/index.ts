import app from './app'
import config from './config/config'
import { logger } from '~/utils/loggers'

const startApp = async () => {
  app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`)
  })
}

startApp()
