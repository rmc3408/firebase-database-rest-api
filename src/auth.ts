import axios from 'axios'
import { config } from 'dotenv'
import path from 'path'
config({ path: path.join(__dirname, '../', '.env') })

const afterNameFunction = `?key=${process.env.GOOGLE_API_KEY}`

export type authDataType = {
  email: string
  password: string
}


export async function signUpEndpoint(data: authDataType) {
  return axios.post(`${process.env.AUTH_REST_API_BASE_URL}signUp${afterNameFunction}`, {
    email: data.email,
    password: data.password,
    returnSecureToken: true,
  })
}


export async function signInEndpoint(data: authDataType) {
  return axios.post(`${process.env.AUTH_REST_API_BASE_URL}signInWithPassword${afterNameFunction}`, {
    email: data.email,
    password: data.password,
    returnSecureToken: true,
  })
}
