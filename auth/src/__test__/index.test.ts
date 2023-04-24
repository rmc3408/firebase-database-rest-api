import request from 'supertest'
import { app } from '../index'

test('GET /', async () => {
  await request(app).get('/').expect(200)
})
