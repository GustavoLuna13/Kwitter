user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bem vindo ao app, " + user_name + "!";

const firebaseConfig = {
    apiKey: "AIzaSyDihTrC-8EeEdiUUveAd0CxaB43yao-eTk",
    authDomain: "kwitter-b0544.firebaseapp.com",
    databaseURL: "https://kwitter-b0544-default-rtdb.firebaseio.com",
    projectId: "kwitter-b0544",
    storageBucket: "kwitter-b0544.appspot.com",
    messagingSenderId: "302491093374",
    appId: "1:302491093374:web:21b212f3ae6e4a5a76cb2f"
  };

  firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    porpuse: "Adicionando nome da sala" });

    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}

function getData () {

    firebase.database().ref("/").on('value', function (snapshot) {

    document.getElementById ("output").innerHTML = "";
    snapshot.forEach(function(childSnapShot){
        childKey = childSnapshot.key;
        Room_names = childKey;
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;

    });
    });
}

getData ();

function redirectToRoomName (name) {

    localStorage.setItem ("room_name", name);
    window.location = "kwitter_page.html";

}

function logout () {

    localStorage.removeItem ("user_name");
    localStorage.removeItem ("room_name");
    window.location = "index.html";

}