import React from 'react';

import App from './App';
import WorkspaceContainer from './components/WorkspaceContainer'

import { BrowserRouter as Router, Route } from "react-router-dom";

function AppMain() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/workspace" component={WorkspaceContainer} />
    </Router>
  );
}

export default AppMain;
