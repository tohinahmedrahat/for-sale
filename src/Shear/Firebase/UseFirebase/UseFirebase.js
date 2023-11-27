import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConf/FirebaseConf";
import { useEffect } from "react";
import { useState } from "react";

// Initialize Firebase
initializeApp(firebaseConfig);
const UseFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, SetUser] = useState("");

  const singUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)  
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser,profile)
  }
  const singInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      
  };

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        SetUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const singOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const userChanged = onAuthStateChanged(auth, (user) => {
         if (user) {
             SetUser(user)
            //  setLoading(false)
         } else {
          SetUser("")
         }
       });
       return () => userChanged;
 },[])
  return {
    singUpWithEmail,
    user,
    singOut,
    singInWithEmail,
    singInWithGoogle,
    updateUserProfile,
    SetUser
  };
};

export default UseFirebase;
