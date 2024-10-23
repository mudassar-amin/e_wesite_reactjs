// Login.js
import { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../firebase"; // Ensure correct path to firebase.js

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup

  // Google Login Handler
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User logged in with Google");
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  // Email/Password Signup Handler
  const handleSignup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully");
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  };

  // Email/Password Login Handler
  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  // Form submission handler based on login/signup mode
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isSignup) {
      handleSignup(email, password);
    } else {
      handleLogin(email, password);
    }
  };

  return (
    <div>
      <h1>{isSignup ? "Sign Up" : "Login"}</h1>

      {/* Google Login Button */}
      <button onClick={loginWithGoogle}>Login with Google</button>

      <h2>{isSignup ? "Sign up with Email" : "Login with Email"}</h2>

      {/* Email/Password Form */}
      <form onSubmit={handleFormSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>

      {/* Toggle between Login and Sign Up */}
      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Login here" : "Sign up here"}
        </button>
      </p>
    </div>
  );
};

export default Login;
