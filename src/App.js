import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/global/Header';
import HomePage from './pages/HomePage';
import TracksPage from './pages/TracksPage';
import AddTrackPage from './pages/AddTrackPage';
import SingleTrackPage from './pages/SingleTrackPage';

const App = () => (
  <div className="App">
    <Header />
    <Route path="/" exact component={HomePage} />
    <Route path="/tracks" exact component={TracksPage} />
    <Route path="/track/:id" exact component={SingleTrackPage} />
    <Route path="/add-track" exact component={AddTrackPage} />
  </div>
);

export default App;
