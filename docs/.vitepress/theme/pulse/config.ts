import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp(
  {
    apiKey: import.meta.env.VITE_PULSE_API_KEY,
    authDomain: import.meta.env.VITE_PULSE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PULSE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_PULSE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_PULSE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_PULSE_APP_ID,
  },
  'pulse'
)

export const db = getFirestore(app)
