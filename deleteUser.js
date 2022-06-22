import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getDatabase,
    remove,ref,get
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

const myForm = document.getElementById("deleteForm");

function deleteUser(e){
    e.preventDefault();
    const userID = document.getElementById("userRef").value;
   

    // *************************************
    if(userID.length > 1) { // to avoid delete all useser if input is empty
         const myUser = ref(db, "users/"+userID); // get user ref

          get(myUser) // get data 
         .then((result)=>{ //after get data
            if(result.exists())  // check if data exists 
            {remove(myUser)  //remove the user
            .then(()=>{ 
                alert("user "+userID+" deleted succefully !") ; // alert removing success
                 myForm.reset()
                 }) 
            }
            else{alert("User not found !")} // user not found
         })
    
    // remove(myUser).then(()=> alert("user :"+userID+" deleted succefully !"))
  
}
   else{
    alert("User not found !")
   }

}
myForm.addEventListener('submit', (e) => deleteUser(e) )


