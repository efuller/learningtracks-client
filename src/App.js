import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/global/Header';
import HomePage from './pages/HomePage';
import TracksPage from './pages/TracksPage';
import AddTrackPage from './pages/AddTrackPage';
import SingleTrackPage from './pages/SingleTrackPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const App = () => (
  <div className="App">
    <Header />
    <Route path="/" exact component={HomePage} />
    <Route path="/tracks" exact component={TracksPage} />
    <Route path="/track/:id" exact component={SingleTrackPage} />
    <Route path="/add-track" exact component={AddTrackPage} />
    <Route path="/register" exact component={RegisterPage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
