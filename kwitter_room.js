
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDv4wT7fVXQ4EytZQY8yvCmkWLD-npCqQ0",
      authDomain: "class---93-1da33.firebaseapp.com",
      databaseURL: "https://class---93-1da33-default-rtdb.firebaseio.com",
      projectId: "class---93-1da33",
      storageBucket: "class---93-1da33.appspot.com",
      messagingSenderId: "136759653643",
      appId: "1:136759653643:web:655afa32d733c249fa9e0e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id= "Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}


