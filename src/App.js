import React from 'react';
import './App.css';
import Title from "./components/Title.js";
import ProjectContainer from "./containers/ProjectContainer.js"

function App() {
  return (
    <div className="App">


      <header className="App-header">
      <Title/>
        <img src="/adam-gordon-burner-hat.png" className="App-logo-1" alt="logo" />
        <img src="/adam-gordon-burner-hat.png" className="App-logo-2" alt="logo" />
        <img src="/adam-gordon-burner-hat.png" className="App-logo-3" alt="logo" />
        <img src="/adam-gordon-burner-hat.png" className="App-logo-4" alt="logo" />
        <img src="/adam-gordon-burner-hat.png" className="App-logo-5" alt="logo" />
        <img src="/adam-gordon-burner-hat.png" className="App-logo-6" alt="logo" />
        <ProjectContainer/>
      </header>
    </div>
  );
}

export default App;
