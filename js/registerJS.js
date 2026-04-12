

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

let app, auth, db;


async function initFirebase() {
  const res = await fetch('https://backend-aero-oil.onrender.com/firebase-config');
  const firebaseConfig = await res.json();

  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getDatabase(app);
}


window.addEventListener('DOMContentLoaded', async () => {
  await initFirebase(); 
  const nameField = document.querySelector('#name');
  const emailField = document.querySelector('#email');
  const passwordField = document.querySelector('#password');
  const password2Field = document.querySelector('#password2');
  const registerBtn = document.querySelector('#registerBut');

  const alertText = document.getElementById('alertText');
  const modalEl = document.getElementById('staticBackdrop');
  const bsModal = new bootstrap.Modal(modalEl);

  function showAlert(message) {
    alertText.innerText = message;
    bsModal.show();
  }

  registerBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const pass = passwordField.value;
    const pass2 = password2Field.value;

    if (!name || !email || !pass || !pass2) {
      return showAlert('Усі поля обов\'язкові.');
    }

    if (pass !== pass2 || pass.length < 6) {
      return showAlert('Паролі не співпадають або менше 6 символів.');
    }

    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;


      await set(ref(db, `Користувачі АЗС/${user.uid}`), {
        UID: user.uid,
        Name: name,
        Email: email,
        Orders: {},


        TotalA95: 0,
        TotalA92: 0,
        TotalDiesel: 0,
        TotalGas: 0,
        BonusProgress: 0,    
        LoyalProgress: 0,    
        BonusPoints: 0,   

      });

      showAlert('Користувач успішно зареєстрований!');

      nameField.value = '';
      emailField.value = '';
      passwordField.value = '';
      password2Field.value = '';

    } catch (error) {
      console.error(error);
      showAlert(error.message);
    }
  });
});
