
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " +  Room_names);
row =  "<div class= 'room_name' id="+Room_names+"onclick 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
var firebaseConfig = {
      apiKey: "AIzaSyBOczMrc_Aij3Y1fKTEvCD40Qh2tGDkKu4",
      authDomain: "website-4f8b9.firebaseapp.com",
      databaseURL: "https://website-4f8b9-default-rtdb.firebaseio.com",
      projectId: "website-4f8b9",
      storageBucket: "website-4f8b9.appspot.com",
      messagingSenderId: "928346202747",
      appId: "1:928346202747:web:87ff690d09827a843778de",
      measurementId: "G-MGG3VC9MCM"
    };
    
    // Initialize Firebase
     app = initializeApp(firebaseConfig);
    function addRoom()
{
   room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
 {
       console.log(name);   
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
 }
 function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
 }
 