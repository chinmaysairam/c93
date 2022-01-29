import { initializeApp } from "firebase/app";
import  firebase from 'firebase';
require('@firebase/firestore');
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLHBBagK48jX27LwRUnv69tBo3y68zHrk",
  authDomain: "remainder-app-d2010.firebaseapp.com",
  projectId: "remainder-app-d2010",
  storageBucket: "remainder-app-d2010.appspot.com",
  messagingSenderId: "1020525995051",
  appId: "1:1020525995051:web:73aad7ccdf18c6fc59766e"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore()