import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

  return (
    <main className="welcome">
      <h2>Welcome to Reddy's Chat App.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with the React Developer.</p>
      <button className="sign-in" onClick={googleSignIn}>
        <h2>signIn with &nbsp; <FcGoogle />oogle</h2>
      </button>
    </main>
  );
};

export default Welcome;
