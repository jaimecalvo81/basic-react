import React from "react";

// Stateless Functional Comonent

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-lught">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-primary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
