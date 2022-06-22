import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getDatabase,
  ref,
  set
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
// change the url of the initializeApp (app will become database) then past it for the 2nd url , to succefully download ref set etc ..

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj0apYsBPVDQ67CbPQBvybyOBwpRgtgJs",
  authDomain: "master-class-js-3924e.firebaseapp.com",
  databaseURL: "https://master-class-js-3924e-default-rtdb.europe-west1.firebasedatabase.app",
  // il faut chnager le db url to the current location of your db
  // https://DBNAME.REGION.firebasedatabase.app
  //u'll find DBNAME inside ur realtime db , and the region too , u'll find the correct url inside the page of realtimeDB
  projectId: "master-class-js-3924e",
  storageBucket: "master-class-js-3924e.appspot.com",
  messagingSenderId: "533223560676",
  appId: "1:533223560676:web:5e597a878d848d13d4a3f1"
};

// MOST IMPORTANT LINES
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/*************************************************** */

// form id should be outside the functions cors
const myForm = document.getElementById("myForm");

// function submit
function submitForm(e) {
  e.preventDefault(); // block the hard refresh

  //get all the inputs value
  const email = document.getElementById("inputEmail4").value;
  const pwd = document.getElementById("inputPassword4").value;
  const adresse = document.getElementById("inputAddress").value;
  const city = document.getElementById("inputCity").value;
  const zip = document.getElementById("inputZip").value;

  //call save Form to add the data to our DB
  saveForm(email, pwd, adresse, city, zip);
  // Show a little msg
  alert("Form submitted");
  myForm.reset()
}

// function saveForm : POST Request into our DB

function saveForm(inputMail, inpytPsw, inputAdr, inputCity, inputZip) {
  // UNIVERSAL SYNTAXE FROM FIREBASE DOCS
  set(ref(db, "users/" + inpytPsw), {
    // users/+pwd  will appear as the parent of any object inserted (dont use email as pathname , cannot containe symboles @,*,.,_ ..)
    Email: inputMail,
    Password: inpytPsw,
    Adresse: inputAdr,
    City: inputCity,
    Zip_Code: inputZip,
  });
}

myForm.addEventListener("submit", (e) => submitForm(e));

