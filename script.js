
// const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");
// const container = document.getElementById("container");

// // Event listeners for toggling between Sign Up and Sign In
// signUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// signInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });

// // Firebase Initialization
// const firebaseConfig = { 
//   apiKey: "AIzaSyB6xGbLgM_ZXxoHFXI95CpZWV1ex7W8PuU",
//   authDomain: "nithra-cd85b.firebaseapp.com",
//   projectId: "nithra-cd85b",
//   storageBucket: "nithra-cd85b.appspot.com",
//   messagingSenderId: "668283652015",
//   appId: "1:668283652015:web:86f26bb8dc5f0ee8a7115a"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();

// // Sign Up function
// const signUp = () => {
//   const email = document.getElementById("signup-email").value;
//   const password = document.getElementById("signup-password").value;
  
//   auth.createUserWithEmailAndPassword(email, password)
//     .then((result) => {
//       // Signed up successfully
//       document.write("You are Signed Up");
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//     });
// }

// // Sign In function
// const signIn = () => {
//   const email = document.getElementById("signin-email").value;
//   const password = document.getElementById("signin-password").value;
  
//   auth.signInWithEmailAndPassword(email, password)
//     .then((result) => {
//       // Signed in successfully
//       document.write("You are Signed In");
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//     });
// }

// // Attaching the signUp and signIn functions to buttons
// document.getElementById("signup-btn").addEventListener("click", signUp);
// document.getElementById("signin-btn").addEventListener("click", signIn);





// DOM Elements
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Event listeners for toggling between Sign Up and Sign In
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Firebase Initialization
const firebaseConfig = { 
  apiKey: "AIzaSyB6xGbLgM_ZXxoHFXI95CpZWV1ex7W8PuU",
  authDomain: "nithra-cd85b.firebaseapp.com",
  projectId: "nithra-cd85b",
  storageBucket: "nithra-cd85b.appspot.com",
  messagingSenderId: "668283652015",
  appId: "1:668283652015:web:86f26bb8dc5f0ee8a7115a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Sign Up function
const signUp = () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  
  auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed up successfully
      window.location.href = "main.html"; // Redirect to main.html
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

// Sign In function
const signIn = () => {
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;
  
  auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in successfully
      document.write("You are Signed In");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

// Attaching the signUp and signIn functions to buttons
document.getElementById("signup-btn").addEventListener("click", signUp);
document.getElementById("signin-btn").addEventListener("click", signIn);
