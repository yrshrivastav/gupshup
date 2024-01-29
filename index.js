
//<script type="module">
        
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, get, set, ref, child} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCF71QW7kHSSc8KT-QqOC86hkcYU7QPYik",
  authDomain: "gupshup-v1.firebaseapp.com",
  projectId: "gupshup-v1",
  storageBucket: "gupshup-v1.appspot.com",
  messagingSenderId: "806231601821",
  appId: "1:806231601821:web:0b0946b19bce1e72545a74",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

let message1=document.querySelector("#message");
let sendButton = document.querySelector("#button");
var myName = prompt("Enter your name");

const sendMessage = () =>{
let message =document.querySelector("#message").value;
set(ref(db, "People/"+myName), {
    "sender": myName,
    "message": message
})
.then(()=>{
    alert("Message sent successfully!")
})
.catch((error)=>{
    alert(error)
})
;

message1.value=""
return false;
};

sendButton.addEventListener('click', sendMessage);

// listen for incoming messages
const dbref = ref(db);

get(child(dbref, "People")).then((snapshot)=> {
var html = "";
// give each message a unique ID
html += "<li>";
html += snapshot.val().sender + "  : " + snapshot.val().message;
html += "</li>";

document.querySelector("#messages").innerHTML += html;
console.log(myName);
console.log(html);
});



// </script>