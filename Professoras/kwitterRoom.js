
//ADICIONE SEUS LINKS FIREBASE

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}


const firebaseConfig = {
  apiKey: "AIzaSyBDJJjbmhS23w2SIZEIAyYNqEwvLehZuT4",
  authDomain: "vamosconversar-bf4cb.firebaseapp.com",
  projectId: "vamosconversar-bf4cb",
  storageBucket: "vamosconversar-bf4cb.appspot.com",
  messagingSenderId: "749453675382",
  appId: "1:749453675382:web:7572390bf47693765d0857"
};

firebase.initializeApp(firebaseConfig);