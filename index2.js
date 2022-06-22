import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
// change the url of the initializeApp (app will become database) then past it for the 2nd url , to succedfully download ref set etc ..

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


/*******************Get All Users************************* */
function getAllUsers() {
 
  const allUsers = ref(db, "users/"); // Path to search for the data

  onValue(allUsers, (snapshot) => {
    const data = snapshot.val(); // get only the data
    console.log(data); // check data
    var keys = Object.keys(data); //get users keys === pwd in our case
  
    for (let i = 0; i < keys.length; i++) { // for loop to go further all the users
      var k = keys[i]; // get current user
        //get his/her data 
       
      var email = data[k].Email; 
      var adresse = data[k].Adresse;
      var zipCode = data[k].Zip_Code;
      var city = data[k].City;
        //Create new HTML element
      var e = document.createElement("div");
      // put our data into our html element
      e.innerHTML =
        '<div class="row m-3" > <span class="text-secondary">'+k+'</span>' +
        '<div class=""> '+
        '<h3> <span class="text-primary">User </span>: ' +
        email +
        "</h3>" +
        '<p class=""> Town :' +
        adresse +
        "</p>" +
        '<p class="">City: ' +
        city +
        "  | Zip Code : " +
        zipCode +
        " </p>" +
        "</div >  " +
        "</div > ";
        // display data on our page
      document.getElementById("dashboard").appendChild(e);
    
    }
  });
}

getAllUsers()

