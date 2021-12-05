// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyB-Kbq74ozTLnGNSmAAzCf4mHYkkpQCQFU",
  authDomain: "b43---1---consultorio.firebaseapp.com",
  projectId: "b43---1---consultorio",
  storageBucket: "b43---1---consultorio.appspot.com",
  messagingSenderId: "242772603068",
  appId: "1:242772603068:web:83099c36643019375c60b9",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/med-register",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      const user = {
        mid: authResult.user.mid,
        name: authResult.user.displayName,
        photoUrl: authResult.user.photoURL,
        email: authResult.user.email,
        flagNewUser: authResult.additionalUserInfo.isNewUser,
        type: "médico",
      };

      localStorage.setItem("user", JSON.stringify(user));
      return true;
    },
  },
};

function MedGoogleLoginButton() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default MedGoogleLoginButton;
