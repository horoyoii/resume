import React from 'react';
import logo from './logo.svg';
import './App.css';

import Works from './containers/Works'
import Intro from './containers/Intro'
import TechList from './containers/TechList'
import Experience from './containers/Experience'
import Skills from './containers/Skills'
import Visit from './containers/Visit'
import Test from './containers/Test'
import Presentation from './containers/Presentation'

function App() {
  return (
    <div className="App container">
      <Visit/>
      <Intro/>
      <Works/>
      <Skills/>
      <Experience/>
      <Presentation/>

    </div>
  );
}

export default App;
