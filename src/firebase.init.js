import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCaLPZ0JMS4sz6P0TRcbQMvDe9hkSP9WN0",
    authDomain: "p-hero.firebaseapp.com",
    projectId: "p-hero",
    storageBucket: "p-hero.appspot.com",
    messagingSenderId: "202494569384",
    appId: "1:202494569384:web:f661b720f722458ce5cb9d"
  };

  const app=initializeApp(firebaseConfig);
  export default app;