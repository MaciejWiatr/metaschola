// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBhCyLULUYm-tYnFBXAACkZNqRMVqCENPM",
	authDomain: "metaschola-d46f7.firebaseapp.com",
	projectId: "metaschola-d46f7",
	storageBucket: "metaschola-d46f7.appspot.com",
	messagingSenderId: "638828539412",
	appId: "1:638828539412:web:90e2721199361894228101",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
export default fireApp;
