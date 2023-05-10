import axios from 'axios'
import { config } from 'dotenv'
import path from 'path'
import { type authDataType, signInEndpoint, signUpEndpoint } from './auth'

config({ path: path.join(__dirname, '../', '.env') })


export type noteDataType = {
  title: string
  details: string
}

const user1: authDataType = {
  email: 'molinaro.raphael@gmail.com',
  password: process.env.AUTH_REST_API_PASSWORD!
}

const user2: authDataType = {
  email: 'rmc3408@protonmail.com', 
  password: process.env.AUTH_REST_API_PASSWORD!
}

async function seeReminder() {
  const databaseURL1 = `${process.env.DATABASE_REST_API_BASE_URL}/reminder.json`
  const databaseURL2 = `${process.env.DATABASE_REST_API_BASE_URL}/reminder/time/task.json`
  const result = await axios.get(databaseURL2)
  const { data } = result
  console.log(data)
}

async function seeNote(user: authDataType) {
  const signedIn = await signInEndpoint(user)
  const userId = signedIn.data.localId // Get uid (= localId) to use node = cWAmXs9...
  const { idToken } = signedIn.data // Get idToken to auth

  //const databaseURL = `${process.env.DATABASE_REST_API_BASE_URL}/user-notes/${userId}.json`

  //Logged-in as User 02
  const endpointUser12 = `${process.env.DATABASE_REST_API_BASE_URL}/notes.json`
  const endpointUser2 = `${process.env.DATABASE_REST_API_BASE_URL}/notes/MzVxkJQqEjgAJcDxaF0L9zv6gAA2.json`
  const endpointUser1 = `${process.env.DATABASE_REST_API_BASE_URL}/notes/cWAmXs9FEMa323MViK78ExO1GN02.json`
  
  const authToken = `?auth=${idToken}`

  const result = await axios.get(endpointUser12 + authToken)
  const { data } = result
  console.log(data)
}

async function saveNote(user: authDataType) {
  // FIRST TIME ONLY TO CREATE USER IN DATABASE IDENTITY
  // const result = await signUpEndpoint(user)
  // console.log(result.data)

  const signedIn = await signInEndpoint(user)
  const userId = signedIn.data.localId // Get uid (= localId) to auth and create node = cWAmXs9FEMa323MViK78ExO1GN02
  const { idToken } = signedIn.data // Get idToken to auth

  const databaseURL = `${process.env.DATABASE_REST_API_BASE_URL}/notes/${userId}.json`
  const authToken = `?auth=${idToken}`

  const newNote: noteDataType = { title: 'title-HELLO', details: 'detailed-HELLO' }

  const createdNote = await axios.post(databaseURL + authToken, newNote)
  console.log(createdNote.data)
}

// seeReminder()

// seeNote(user2)

// saveNote(user2)