import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Style.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYUo7fyVudrn9uibF3u69KSVOY3TTl024",
  authDomain: "tiendarookiesarg.firebaseapp.com",
  projectId: "tiendarookiesarg",
  storageBucket: "tiendarookiesarg.appspot.com",
  messagingSenderId: "388449073584",
  appId: "1:388449073584:web:52862c30b8808cdf3bfe75",
  measurementId: "G-5XVXCZYMP8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
