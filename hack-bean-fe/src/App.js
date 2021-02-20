import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Main';
import SimpleModal from './components/CreateButton';
// import NextModal from './components/projectButton';
import cotton_candy_scene from './images/cotton_candy_scene.jpg'
import WorkspaceContainer from './components/WorkspaceContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${cotton_candy_scene})`
      , height: "100vh", width: "100%"
      , backgroundRepeat: "no-repeat"
      , backgroundSize: "cover"
    }}>
      <Test />
      <div id="homeButtons">
        <SimpleModal />
        <Link to="/workspace">
          <button >View Current Projects</button>
        </Link>
      </div>

    </div>
  );
}

export default App;
