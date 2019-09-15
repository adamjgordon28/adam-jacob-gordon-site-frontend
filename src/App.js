import React from 'react';
import './App.css';
import Title from "./components/Title.js";
import ProjectContainer from "./containers/ProjectContainer.js"

function App() {
  return (
    <div className="App">


      <header className="App-header">
      <Title/>
      <ProjectContainer/>
      </header>
    </div>
  );
}

export default App;
