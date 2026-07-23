import { auth } from "./firebase-init.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"

document.querySelector(".authhh").addEventListener("submit", async (e) => {
  e.preventDefault()
  let email = document.getElementById("maill").value
  const password = document.getElementById("psdd").value

  if (email === 'admin') {
    email = 'admin@bhakas.com';
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)

    if (userCredential.user.email === 'admin@bhakas.com') {
      document.cookie = "admin=true; path=/";
      window.location.href = "/admin";
    } else {
      window.location.href = "/shop";
    }
  } catch (bhakas) {
    console.error("Error during login:", bhakas);
    alert("Login failed: " + bhakas.message);
  }
})
