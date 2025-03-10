import React from 'react';
import Typewriter from 'typewriter-effect';
import './Header.css';
import nameImage from '../../assets/name.png'; // Adjust path as needed

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        {/* Typing Animation */}
        <div className="typing-text">
          <Typewriter
            options={{
              strings: ["Dotslash Welcomes You to", "CipherQuest 2025"],
              autoStart: true,
              loop: true,
              delay: 50, // Typing speed
              deleteSpeed: 30, // Speed of deleting
            }}
          />
        </div>
        {/* Image */}
        <img src={nameImage} alt="Name" className="header-image" />
      </div>
    </div>
  );
};

export default Header;
