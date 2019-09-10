import React from 'react';
import logo from './logo.svg';
import './App.css';

import Works from './containers/Works'
import Intro from './containers/Intro'
import TechList from './containers/TechList'
import Experience from './containers/Experience'
import Skills from './containers/Skills'
import Visit from './containers/Visit'

function App() {
  return (
    <div className="App container">
      <Visit/>
      <Intro/>
      <Skills/>
      <Works/>
      <Experience/>
    </div>
  );
}

export default App;
