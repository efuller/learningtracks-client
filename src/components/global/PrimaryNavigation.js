import React from 'react';

const PrimaryNavigation = () => (
    <nav className="navbar is-transparent">
        <div className="navbar-brand">
            <a href="/" className="navbar-item">
                <h1 className="is-size-5">learningtracks.io</h1>
            </a>
            <div
                className="navbar-burger burger"
                data-target="navbarmenu"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
                <a href="/" className="navbar-item">
                    Home
                </a>
                <a href="/" className="navbar-item is-hoverable">
                    Tracks
                </a>
                <a href="/" className="navbar-item">
                    Add Track
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="bd-tw-button button" href="/login">
                          <span className="icon">
                            <i className="fa fa-twitter"/>
                          </span>
                                <span>Login</span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button" href="/register">
                          <span className="icon">
                            <i className="fa fa-download"/>
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