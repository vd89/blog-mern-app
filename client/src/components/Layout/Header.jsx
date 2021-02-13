import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          <h3>MERN Blog</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <h4>Home</h4>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/createBlog" className="nav-link">
                <h4>Create Blog</h4>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
