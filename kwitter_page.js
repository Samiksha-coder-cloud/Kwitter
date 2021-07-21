//YOUR FIREBASE LINKS
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
    var room_name = localStorage.getItem("roomName");

    function send() {
          console.log(room_name);
          var msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name1 = message_data['name'];
      likes = message_data['like'];
      message = message_data['message'];
      name_tag = "<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
      message_tag = "<h4 class='message_h4'>"+message+"</h4>"
      like_button = "<button class='btn btn-info' id="+firebase_message_id+" value="+likes+" onclick='likes_btn(this.id)'>";
      span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes: "+likes+"</span></button><hr>"
      row = name_tag + message_tag + like_button + span_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function likes_btn(id) {
      console.log("Like Button is clicked" + id);
      current_likes = document.getElementById(id).value;
      updated_likes = Number(current_likes)+1;
      console.log("Updated Likes= "+updated_likes);
      firebase.database().ref(room_name).child(id).update({
            like: updated_likes
      });
}
