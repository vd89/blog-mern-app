import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container">
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

          <div className="collapse navbar-collapse container" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
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
                <Link to='/about' className="nav-link" >
                  <h4>About</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
