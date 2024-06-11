import React from "react";
import "../styles/navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <a href="#top-section">
        <img
          className="pokelogo"
          src="/assets/images/pokelogo.png"
          alt="pokeball-logo"
        />
      </a>
    </div>
  );
}
export default Navbar;
