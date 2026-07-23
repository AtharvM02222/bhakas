import { auth } from "./firebase-init.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault()
  const email = document.getElementById("maill").value
  const password = document.getElementById("psdd").value
  await createUserWithEmailAndPassword(auth, email, password)
  window.location.href = "/shop"
})
