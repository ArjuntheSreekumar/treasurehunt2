import React, { useState, useContext, useCallback } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./LoginPopup.css";

export const LoginPopup = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(StoreContext);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email.trim(), password.trim());
        console.log("Login successful!");
        setIsAuthenticated(true);
        setShowLogin(false); // Close the popup after login
      } catch (error) {
        alert("Invalid credentials or error logging in!");
        console.error("Firebase Auth Error:", error);
      }
    },
    [email, password, setIsAuthenticated, setShowLogin]
  );

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Login</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={!email.trim() || !password.trim()}>
          Login
        </button>
      </form>
    </div>
  );
};
