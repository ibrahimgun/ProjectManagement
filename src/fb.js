import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB7CDPceNcknh-83VOXhnP4hag7UaQ3bgk",
    authDomain: "proje-yonetim-fcf99.firebaseapp.com",
    databaseURL: "https://proje-yonetim-fcf99.firebaseio.com",
    projectId: "proje-yonetim-fcf99",
    storageBucket: "proje-yonetim-fcf99.appspot.com",
    messagingSenderId: "226192345811",
    appId: "1:226192345811:web:3cd9989ffae3c8775de226",
    measurementId: "G-R8SBRJ8MQJ"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();

 

  export default db;