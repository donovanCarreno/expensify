import * as firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// database.ref('notes').push({
//   title: 'to do',
//   body: 'go run'
// })

// database.ref().on('value', (snapshot) => {
//   console.log('snapshot', snapshot.val())
// })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log('val', val)
//   })
//   .catch((e) => console.log('error: ', e))

// database.ref().set({
//   name: 'Donovan Carreno',
//   age: 36,
//   isSingle: false,
//   location: {
//     city: 'Allen',
//     state: 'TX'
//   }
// })
// .then(() => console.log('data saved'))
// .catch((e) => console.log('error: ', e))
//
// database.ref().update({
//   age: 37,
//   name: 'Donny Carreno'
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => console.log('data removed'))
//   .catch((e) => console.log('error: ', e))
