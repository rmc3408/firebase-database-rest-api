import request from 'supertest'
import { app } from '../app'

// beforeAll(() => {})

// beforeEach(() => {})

// afterEach(() => {})

// afterAll(() => {})

type RequestBodyType = {
  email: string
  password: string
}

const requestBody: RequestBodyType = {
  email: 'rmc@gmail.com',
  password: 'Secret123',
}

describe('SIGN UP', () => {
  test('it returns 422 status code if email not valid', async () => {
    await request(app).post('/api/auth/signup').send({ email: '' }).expect(422)

    await request(app).post('/api/auth/signup').send({ email: 'a2.com', password: 'Secret123' }).expect(422)
    // .then((res) => console.log(res.body))
  })

  test('it returns 200 status code for POST method request', async () => {
    await request(app).post('/api/auth/signup').send(requestBody).expect(201)
    // .then((res) => console.log(res.body))
  })

  test('it returns 405 status code for GET, PUT, DELETE method request', async () => {
    await request(app).get('/api/auth/signup').expect(405)
    await request(app).put('/api/auth/signup').expect(405)
    await request(app).delete('/api/auth/signup').expect(405)
  })

  // password must contains at least 6 letters, one lowecase and one uppercase and one numbers
  test('it returns 422 status code if password not valid', async () => {
    await request(app).post('/api/auth/signup').send({ email: 'a@2.com', password: 'Secret123' }).expect(201)
    await request(app).post('/api/auth/signup').send({ email: 'a@2.com', password: 'Sa3' }).expect(422)
    await request(app).post('/api/auth/signup').send({ email: 'a@2.com', password: 'secret123' }).expect(422)
    await request(app).post('/api/auth/signup').send({ email: 'a@2.com', password: 'SECRET123' }).expect(422)
    await request(app).post('/api/auth/signup').send({ email: 'a@2.com', password: 'Secret' }).expect(422)
  })
})
