import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxx",
  authDomain: "xxxx-xxxxx.xxxxx.xxxx",
  projectId: "xxx-xxxxx",
  storageBucket: "xxxx-xxxx.xxxxxxx.xxxx",
  messagingSenderId: "xxxxxxxxxxxxxx",
  appId: ":xxxxxxxxxxxxxxxxxx:"
};
// Initialize Firebasex
firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
