import axios from 'axios'
import path from 'path'
import { config } from 'dotenv'
import { authDataType, signUpEndpoint, signInEndpoint } from './auth';
config({ path: path.join(__dirname, '..', '.env') });

export type loginDataType = {
  title: string
  details: string
}

const fakeUser: authDataType = {
  email: process.env.AUTH_REST_API_EMAIL!,
  password: process.env.AUTH_REST_API_PASSWORD!
}


async function getFirebase() {
  const result = await axios.get(process.env.FIREBASEDB_REST_API_BASE_URL + '/notes' + '.json')
  const data = result.data
  console.log(data)
}

async function getAuthenticatedFirebase() {

  const signedIn = await signInEndpoint(fakeUser)
  const uid = signedIn.data.localId     // get uid (= localId) to use node = cWAmXs9...
  const idToken = signedIn.data.idToken // get idToken to auth

  const databaseURL = process.env.FIREBASEDB_REST_API_BASE_URL + '/notes/' + uid + '.json'
  const authToken = '?auth=' + idToken
  
  const result = await axios.get(databaseURL + authToken)
  const data = result.data
  console.log(data)
}

async function postFirebase() {
  
  // FIRST TIME ONLY TO CREATE USER IN DATABASE IDENTITY
  // const result = await signUpEndpoint(fakeUser)
  // console.log(result.data)

  const signedIn = await signInEndpoint(fakeUser)
  const uid = signedIn.data.localId // get uid (= localId) to auth and create node = cWAmXs9FEMa323MViK78ExO1GN02
  const idToken = signedIn.data.idToken // get idToken to auth

  const databaseURL = process.env.FIREBASEDB_REST_API_BASE_URL + '/notes/' + uid + '.json'
  const authToken = '?auth=' + idToken

  const note: loginDataType = {
    title: 'Welcome',
    details: 'hello George',
  }

  const createdNote = await axios.put(databaseURL + authToken, note)
  console.log(createdNote.data)
}

//getAuthenticatedFirebase()
//getFirebase()
postFirebase()

// {
//   "rules": {
//   	"expenses": { 
//       "$id": { ".read": "auth != null && $id === auth.uid", ".write": "true", }
//     },
//   }
// }