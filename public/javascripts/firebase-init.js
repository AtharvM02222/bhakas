import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"

const app = initializeApp({
  apiKey: "AIzaSyCzR0Q2C7Rfd0lR5DQDVIYsTNH1gftZSHA",
  authDomain: "bhakas-8359a.firebaseapp.com",
  projectId: "bhakas-8359a",
  storageBucket: "bhakas-8359a.firebasestorage.app",
  messagingSenderId: "951357577443",
  appId: "1:951357577443:web:8b77e5f94649f57ddf8dd6"
})

export const auth = getAuth(app)
export const db = getFirestore(app)
