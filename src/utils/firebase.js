// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD-T4N2SreILDblgtrA9UfVRcb_8QxuXR8',
  authDomain: 'e-tuze.firebaseapp.com',
  projectId: 'e-tuze',
  storageBucket: 'e-tuze.appspot.com',
  messagingSenderId: '918994340991',
  appId: '1:918994340991:web:97e6b8de4d11dad19fc34a',
  measurementId: 'G-Q7V0R78VG4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()