import React from 'react'
import {auth} from '../firebaseConfig'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const UserDash = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    
  return (
    <div>UserDash</div>
  )
}

export default UserDash