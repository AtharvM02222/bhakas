import { auth } from "./firebase-init.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"

document.querySelector(".authhh").addEventListener("submit", async (e) => {
  e.preventDefault()
  const email = document.getElementById("maill").value
  const password = document.getElementById("psdd").value
  await signInWithEmailAndPassword(auth, email, password)
  window.location.href = "/shop"
})
