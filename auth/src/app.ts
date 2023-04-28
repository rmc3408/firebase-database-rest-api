import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import signUpRouter from './routers/signup'

// App initialization and settings
const app: Express = express()
app.use(bodyParser.json())

// Routers
app.use('/api/auth', signUpRouter)
app.get('*', (_req: Request, res: Response) => {
  res.status(404).send('Not found')
})

export { app }
