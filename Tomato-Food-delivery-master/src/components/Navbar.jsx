import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from './../assets/assets';
import { StoreContext } from '../context/StoreContext'; // Import StoreContext
import { db, auth } from '../firebase'; // Import Firestore and Auth
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import './Navbar/Navbar.css';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const { cartItems, isAuthenticated } = useContext(StoreContext); // Get cartItems & auth state
    const [totalPoints, setTotalPoints] = useState(0);
    const [userEmail, setUserEmail] = useState(null);

    // ✅ Fetch authenticated user's email
    useEffect(() => {
        const fetchUserEmail = async () => {
            const user = auth.currentUser;
            if (user) {
                setUserEmail(user.email);
            }
        };

        fetchUserEmail();
    }, [isAuthenticated]); // Runs when authentication state changes

    // ✅ Listen for real-time updates in total points
    useEffect(() => {
        if (!userEmail) return;

        const q = query(collection(db, "user_puzzle_answers"), where("userEmail", "==", userEmail));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let sum = 0;
            querySnapshot.forEach((doc) => {
                sum += doc.data().points || 0; // Add points from each document
            });

            setTotalPoints(sum);
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, [userEmail]); // Runs when userEmail is set

    // ✅ Calculate total number of items in the cart
    const getTotalCartCount = () => {
        return Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);
    };

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="Logo" className="log" /></Link>

            <ul className="navbar-menu">
                <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href="#clues" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Clues</a>
                <a href="#socials" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Socials</a>
                <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>

            <div className="navbar-right">
                {/* ✅ Show User Icon if authenticated, otherwise show Login button */}
                {isAuthenticated ? (
                    <img src={assets.user_icon} alt="User" className="user-icon" />
                ) : (
                    <button onClick={() => setShowLogin(true)}>Login</button>
                )}

                {/* ✅ Display Total Points */}
                <div className="points-display">
                    <span>Total Points: {totalPoints}</span>
                </div>

                {/* ✅ Display Cart Count as Text */}
                <Link to="/cart" className="cart-text">
                    TotalCorrectAnswers({getTotalCartCount()})
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
