import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "./../assets/assets";
import { StoreContext } from "../context/StoreContext";
import { db, auth } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "./Navbar/Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { isAuthenticated, setIsAuthenticated } = useContext(StoreContext);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || null);

  // ✅ Listen for Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setIsAuthenticated(true);
        localStorage.setItem("userEmail", user.email);
      } else {
        setUserEmail(null);
        setIsAuthenticated(false);
        localStorage.removeItem("userEmail");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="log" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        <a href="#clues" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          Clues
        </a>
        <a href="#socials" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Socials
        </a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        {isAuthenticated ? (
          <img src={assets.user_icon} alt="User" className="user-icon" />
        ) : (
          <button onClick={() => setShowLogin(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
