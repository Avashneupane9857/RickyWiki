// import React from 'react'
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="text-center fs-3 navbar-brand ubuntu ">
          Ricky and<span className="text-primary"> Morty</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeClassName="active" to="/" className="nav-link ">
                Characters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/episodes" className="nav-link">
                Episodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/location" className="nav-link">
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
