import React from 'react';

import PrimaryNavigation from './PrimaryNavigation';

const Header = () => (
  <header className="hero is-medium is-primary is-bold">
    <div className="container">
      <PrimaryNavigation />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome to LearningTracks.io!</h1>
          <h2 className="subtitle">Structuring your learning...</h2>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
