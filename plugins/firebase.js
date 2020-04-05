import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCM04_8ys5sgOR0GjI___O0A7OZBF_VZSA',
  authDomain: 'reireias-chat.firebaseapp.com',
  databaseURL: 'https://reireias-chat.firebaseio.com',
  projectId: 'reireias-chat',
  storageBucket: 'reireias-chat.appspot.com',
  messagingSenderId: '511922873769',
  appId: '1:511922873769:web:6f84962bcf3c238ced90b8',
  measurementId: 'G-YFVMRT33P6',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
