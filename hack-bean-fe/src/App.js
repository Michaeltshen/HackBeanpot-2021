import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Main';
import SimpleModal from './components/CreateButton';
// import NextModal from './components/projectButton';
import cotton_candy_scene from './images/cotton_candy_scene.jpg'
import WorkspaceContainer from './components/WorkspaceContainer';
import './components/CreateButton.css';

function App() {
  const [newPage, setNewPage] = useState(false);

  if (newPage) {
    return (
      <WorkspaceContainer></WorkspaceContainer>
    )
  }
  return (
    <div className="App" style={{backgroundImage: `url(${cotton_candy_scene})`
                                , height: "100vh", width: "100%"
                                , backgroundRepeat: "no-repeat"
                                , backgroundSize: "cover"}}>
        <Test/>
        <div id = "homeButtons">
          <SimpleModal/>
          <div className="mainButton">
            <button onClick={(e) => setNewPage(true)}>View Current Projects</button>
          </div>
        </div>
        
    </div>
  );
}

export default App;
