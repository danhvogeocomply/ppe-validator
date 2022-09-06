import express, { Express } from 'express'
import xss from 'xss-clean'
import helmet from 'helmet'

const app: Express = express()

// sanitize request data
app.use(xss())

// set security HTTP headers
app.use(helmet())

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

export default app
