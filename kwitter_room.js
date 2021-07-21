//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAa3ckfbO3MFDtv51rAsmqo8UXL_m81rh4",
      authDomain: "kwitter-77837.firebaseapp.com",
      databaseURL: "https://kwitter-77837-default-rtdb.firebaseio.com",
      projectId: "kwitter-77837",
      storageBucket: "kwitter-77837.appspot.com",
      messagingSenderId: "572161324972",
      appId: "1:572161324972:web:7e05bff4d6dcd091c6ac09",
      measurementId: "G-G8049X1KKY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem("userName");
    document.getElementById("user_name").innerHTML = "Welcome  " + user_name;

    function add_room() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            Purpose: "Adding Room Name"
      });
      localStorage.setItem("roomName", room_name);
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect_room(this.id)' >"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect_room(name) {
      console.log(name);
      localStorage.setItem("roomName",name);
      window.location = "kwitter_page.html";
} 

function logout() {
      localStorage.removeItem("roomName");
      localStorage.removeItem("userName");
      window.location = "index.html";
}