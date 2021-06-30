import firebase from "firebase/app";
import "firebase/firestore"; // data base
import "firebase/auth"; // auth

const config = {
  apiKey: "AIzaSyDpWp48wH8NtmE6Bc1yd6sWt-Lxle7Y768",
  authDomain: "ecommerce-b61b9.firebaseapp.com",
  projectId: "ecommerce-b61b9",
  storageBucket: "ecommerce-b61b9.appspot.com",
  messagingSenderId: "533715400593",
  appId: "1:533715400593:web:d7e591332caf8f7fc04c30",
  measurementId: "G-7B3CZ4SJBZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // assigning auth and firestore as viarbales
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // this is our google authentication utility taken from the auth library
// takes some custom params
provider.setCustomParameters({ prompt: "select_account" }); // always trigger google pop up whenever we use this google auth provider for authenticationa dn sign in

export const signInWithGoogle = () => auth.signInWithPopup(provider); // multiple pop ups we want to config to make sure its oonly a google sign up 
export default firebase;
