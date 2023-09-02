import React from 'react'
import { onAuthStateChanged } from "firebase/auth";



const UserDash = (
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
    
) => {
  return (
    <div>UserDash</div>
  )
}

export default UserDash