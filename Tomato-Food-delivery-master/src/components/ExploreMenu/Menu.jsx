import React from "react";
import { menu_list } from "../../assets/assets";
import "./Menu.css";

const Menu = ({ category, setCategory }) => {
  return (
    <div className="clues" id="clues">
      <h1>Choose Your Puzzle</h1>
      <div className="clues-list">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;

          return (
            <div
              key={index}
              className={`clues-list-item ${isActive ? "active" : ""}`}
              onClick={() => setCategory(isActive ? "All" : item.menu_name)}
              aria-label={`Select ${item.menu_name}`}
            >
              <img
                className={isActive ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
