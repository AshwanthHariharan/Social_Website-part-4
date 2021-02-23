//YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
//Start code
function send() {
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,      
message:msg,
like:0
})
document.getElementById("msg").value = ""
}

function logout() {

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}

//End code
      
getData();
