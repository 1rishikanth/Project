// Import the required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDdJPcq3M_lpbBgXcpRIwqw9Q9XUFFaqZk",
    authDomain: "examportal-51eea.firebaseapp.com",
    projectId: "examportal-51eea",
    storageBucket: "examportal-51eea.appspot.com",
    messagingSenderId: "738192023136",
    appId: "1:738192023136:web:4dc927484e4ea56c61ed05",
    measurementId: "G-EN7WBWKNV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

// Helper function to handle authentication
function login(type) {
    const email = prompt(`${type} Email:`);
    const password = prompt(`${type} Password:`);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`${type} logged in successfully!`);
            // Redirect to Dashboard.html after successful login
            if (type === 'Admin') {
                window.location.href = '';  // Redirect to the index page
            }
            if(type === 'Student'){
                window.location.href = 'Student_Dashboard.html'; 
            }
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
}

function register(type) {
    const email = prompt(`Register ${type} Email:`);
    const password = prompt(`Register ${type} Password:`);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`${type} registered successfully!`);
            // Redirect to Dashboard.html after successful registration
            if (type === 'Admin') {
                window.location.href = 'Admin_Dashboard.html';  // Redirect to the index page
            }
            if(type === 'Student'){
                window.location.href = 'Student_Dashboard.html'; 
            }
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
}

// Event listeners
document.getElementById('adminLoginButton').addEventListener('click', () => login('Admin'));
document.getElementById('studentLoginButton').addEventListener('click', () => login('Student'));

document.getElementById('adminRegisterButton').addEventListener('click', () => register('Admin'));
document.getElementById('studentRegisterButton').addEventListener('click', () => register('Student'));
