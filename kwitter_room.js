
//ADD YOUR FIREBASE LINKS HERE
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

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom() {

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

purpose: "adding room name"

});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log(Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML +=row;

      //Start code



      //End code
      });});}
getData();

function redirectToRoomName(name) {

console.log(name);

localStorage.setItem("room_name", name);

window.location = "kwitter_page.html";

}


