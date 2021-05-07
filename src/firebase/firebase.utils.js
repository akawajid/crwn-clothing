import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArvIGYK5rL6CU1CMz7VWKRRMqVzAcr_Gk",
    authDomain: "crwn-db-c4008.firebaseapp.com",
    projectId: "crwn-db-c4008",
    storageBucket: "crwn-db-c4008.appspot.com",
    messagingSenderId: "125220957869",
    appId: "1:125220957869:web:334967212d2d00d1072024",
    measurementId: "G-YJH20EFWB2"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
      }catch(error){
        console.log('error creating user', error.message);
      }
      
    }

    return userRef
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;