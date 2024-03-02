import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDANJhvu7n1MzZ7xFEeYaZTSXyCfyR3c6I",
    authDomain: "qviq-demo.firebaseapp.com",
    projectId: "qviq-demo",
    storageBucket: "qviq-demo.appspot.com",
    messagingSenderId: "731513155952",
    appId: "1:731513155952:web:31552d30c38b37c598dfb5",
    measurementId: "G-QXZ0VMR92E"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };