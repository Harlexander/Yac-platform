var firebaseConfig = {
    apiKey: "AIzaSyCw7wHgaD7mpWBvnn3GWprjZmX7eZXW3Pw",
    authDomain: "yac-platform.firebaseapp.com",
    databaseURL: "https://yac-platform.firebaseio.com",
    projectId: "yac-platform",
    storageBucket: "yac-platform.appspot.com",
    messagingSenderId: "570033718479",
    appId: "1:570033718479:web:2262483b27d108fb29a3ba",
    measurementId: "G-51QY4WLNME"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.database();

//add an event to the submit form
let messageRef = db.ref("message");

const form = document.querySelector("#contact-us");
form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let name = form["name"].value;
    let mobileNumber = form["m-number"].value;
    let email = form["email"].value;
    let message = form["message"].value;

    saveMessage(name, email, mobileNumber, message);
    
    document.querySelector(".alert").style.display = "block";
    form.reset();
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none"  
    }, 3000);
    
});


// //save message to firebase

const saveMessage = (name, email, mNumber, message) => {
    let messages = messageRef.push();

    messages.set({
        name : name,
        email : email,
        mobile_number : mNumber,
        message : message
    });
}