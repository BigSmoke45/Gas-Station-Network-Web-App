import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

let app, auth, db;

async function initFirebase() {
  const res = await fetch(
    "https://backend-aero-oil.onrender.com/firebase-config",
  );
  const firebaseConfig = await res.json();

  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getDatabase(app);
}

window.addEventListener("DOMContentLoaded", async () => {
  await initFirebase();
  const emailField = document.querySelector("#name");
  const passwordField = document.querySelector("#password");
  const findBtn = document.querySelector("#find");
  const okBtn = document.querySelector("#okbut");

  const alertText = document.getElementById("alertText");
  const modalEl = document.getElementById("staticBackdrop");
  const bsModal = new bootstrap.Modal(modalEl);

  let loginSuccess = false;

  function showAlert(message) {
    alertText.innerText = message;
    bsModal.show();
  }

  findBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = emailField.value.trim();
    const pass = passwordField.value;

    if (!email || !pass) {
      return showAlert("Вкажіть email та пароль.");
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        pass,
      );
      const user = userCredential.user;

      const snapshot = await get(ref(db, `Користувачі АЗС/${user.uid}`));

      if (!snapshot.exists()) {
        return showAlert("Дані користувача не знайдено");
      }

      const userData = snapshot.val();

      sessionStorage.setItem("UID", user.uid);

      Object.keys(userData).forEach((key) => {
        if (typeof userData[key] === "object") {
          sessionStorage.setItem(key, JSON.stringify(userData[key]));
        } else {
          sessionStorage.setItem(key, userData[key]);
        }
      });

      showAlert("Вхід виконано успішно");
      loginSuccess = true;
    } catch (error) {
      console.error(error);
      showAlert("Помилка авторизації: " + error.message);
    }
  });

  okBtn.addEventListener("click", () => {
    if (loginSuccess) {
      window.location.href = "personal_cabinet.html";
    }
  });
});
