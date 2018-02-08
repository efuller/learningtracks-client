import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryNavigation = () => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <h1 className="is-size-5">learningtracks.io</h1>
      </Link>
      <div className="navbar-burger burger" data-target="navbarmenu">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="navbarmenu" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item is-hoverable" to="/tracks">
          Tracks
        </Link>
        <Link className="navbar-item" to="/add-track">
          Add Track
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="bd-tw-button button" href="/login">
                <span className="icon">
                  <i className="fa fa-twitter" />
                </span>
                <span>Login</span>
              </a>
            </p>
            <p className="control">
              <a className="button" href="/register">
                <span className="icon">
                  <i className="fa fa-download" />
                </span>
                <span>Register</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default PrimaryNavigation;
