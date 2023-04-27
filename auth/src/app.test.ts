import request from 'supertest'
import { app } from './app'

test('GET /', async () => {
  await request(app).get('/').expect(404)
})
