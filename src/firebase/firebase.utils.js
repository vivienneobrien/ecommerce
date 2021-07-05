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

// We are checking and making new users inside of database based on that userAuth i.e. UID + additional data something we might need later

// based on that User Auth object
// we dont make multiple copies of user in database because we check if it is in our database
// now that our data is being pulled into our application,
// we want to figure out how we store this data so that we can use it in our application
// BASICALLY - We stored the user data in our database but now we have to store that data in the "state" of our application so we can use it in our app!

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if there is no user auth/ if it does not exist, if null that means false, so if it is not false

  // if it does exist then we want to query inside the firestore to see if it does exist
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // this isnt async so we are going to await this
  const snapShot = await userRef.get();

  // if it doesnt exist then we want to create
  // in order for us to create we have to use the document reference object not the snapshot
  // the snapshot simply represents the data
  // if we use CRUD create, read, update/ delete at all we have to use the document reference object
  if (!snapShot.exists) {
    // what data do we want to use in order to create this document
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // calling date javascript creates a new date object of current time and date

    // if this snapshop doesnt exist then we will create data in that place
    // it will always return us back our user ref
    // checking and now making new users inside of our database

    // .set is the create method
    // pass in an object that has all of the data
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
         ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  // the above code simply creates the snapshot
  // but we still might want our userRef in our code for something
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // assigning auth and firestore as viarbales
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // this is our google authentication utility taken from the auth library
// takes some custom params
provider.setCustomParameters({ prompt: "select_account" }); // always trigger google pop up whenever we use this google auth provider for authenticationa dn sign in

export const signInWithGoogle = () => auth.signInWithPopup(provider); // multiple pop ups we want to config to make sure its oonly a google sign up
export default firebase;
