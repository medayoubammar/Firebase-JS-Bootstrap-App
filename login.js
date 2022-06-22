import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

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
  

const app = initializeApp(firebaseConfig);
const myForm = document.getElementById("LoginForm")
//Change last letter to auth to get the correct url


function CheckLogin(e){
    e.preventDefault(); // block the hard refresh
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in  master-class@gmail.tn  master-1234
        const user = userCredential.user;
        localStorage.setItem("cnx","A") // cnx = A if admin connected else = U
        alert("Sign in sucsessfully ! press OK to continue ")
            window.location = '/adminDashboard.html'
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        localStorage.setItem("cnx","H") // cnx = 1 if user connected else = 0
        alert("Password or email invalide ")
      });
}

myForm.addEventListener('submit', (e)=> CheckLogin(e))