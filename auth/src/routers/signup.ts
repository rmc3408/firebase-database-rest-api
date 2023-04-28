import express, { type Router, type Response, type Request } from 'express'
import { type Result, type ValidationError, body, validationResult } from 'express-validator'

const signUpRouter: Router = express.Router()

const validatorMiddleware = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }).withMessage('at least 6 chars'),
  body('password').matches(/[a-z]/).withMessage('no lowercase'),
  body('password').matches(/[A-Z]/).withMessage('no uppercase'),
  body('password').matches(/[0-9]/).withMessage('no numbers'),
]

signUpRouter.post('/signup', validatorMiddleware, (req: Request, res: Response) => {
  const errors: Result<ValidationError> = validationResult(req)

  if (errors.isEmpty()) {
    res.status(201).send({ message: 'credentials valid' })
  }

  // console.log(errors.array())
  res.status(422).send(errors.array())
})

signUpRouter.all('/signup', (_req: Request, res: Response) => {
  res.status(405).send({ message: 'wrong method and resource' })
})

export default signUpRouter
