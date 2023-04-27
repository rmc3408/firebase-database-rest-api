import express, { Router, Response, Request } from 'express'
import { Result, ValidationError, body, validationResult } from 'express-validator'

const signUpRouter: Router = express.Router()

signUpRouter.post('/signup', [body('email').isEmail()], (req: Request, res: Response) => {
  const { email } = req.body
  const errors: Result<ValidationError> = validationResult(req)

  if (email.includes('@') && errors.isEmpty()) {
    res.status(201).send({ message: 'right email' })
  }

  res.status(422).send(errors.array())
})

signUpRouter.all('/signup', (_req: Request, res: Response) => {
  res.status(405).send({ message: 'wrong method and resource' })
})

export default signUpRouter
