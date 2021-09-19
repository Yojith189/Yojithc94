

var firebaseConfig = {
    apiKey: "AIzaSyDExZ00Nn8sGgBejF3l0t9czjH0q9Dhwy0",
  authDomain: "ok-so-what-am-i-going-to-do.firebaseapp.com",
  databaseURL: "https://ok-so-what-am-i-going-to-do-default-rtdb.firebaseio.com",
  projectId: "ok-so-what-am-i-going-to-do",
  storageBucket: "ok-so-what-am-i-going-to-do.appspot.com",
  messagingSenderId: "571988601294",
  appId: "1:571988601294:web:924c9cf12adcf2ac7ae39f"
  };
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase


function Thefunctionofabutton(){
username=document.getElementById("Something").value ;
firebase.database().ref("/").child(username).update({
purpose:"addingUser"
});
}