
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCg0mOCSk6W7GsyCPGCMUbGl4GBPIRr328",
    authDomain: "social-website-7b77c.firebaseapp.com",
    databaseURL: "https://social-website-7b77c-default-rtdb.firebaseio.com",
    projectId: "social-website-7b77c",
    storageBucket: "social-website-7b77c.appspot.com",
    messagingSenderId: "731226237347",
    appId: "1:731226237347:web:81bbe27f578ecbcc975216",
    measurementId: "G-ZYSJ0S35VQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {

user_name = document.getElementById("user_name").value;

firebase.database().ref("/").child(user_name).update({

purpose : "adding"+ " " + user_name

})

localStorage.setItem("user_name", user_name);

window.location = "kwitter_room.html";

  }