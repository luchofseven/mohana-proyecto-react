import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAqVSpn9ZPsDfPRdxWQRmZ8Lg2AoCPv_2o',
  authDomain: 'mohana-8f0d5.firebaseapp.com',
  projectId: 'mohana-8f0d5',
  storageBucket: 'mohana-8f0d5.appspot.com',
  messagingSenderId: '337831298949',
  appId: '1:337831298949:web:72f89095da381d2d5566ec'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
