import React, { Component } from 'react';
import '../App.css';
import WWNProjectCard from '../components/WWNProjectCard.js';
import PawsUpProjectCard from '../components/PawsUpProjectCard.js';
import TellTaleProjectCard from '../components/TellTaleProjectCard.js';

class ProjectContainer extends Component {
  
  render(){

    return(
      <div  >
      <WWNProjectCard/>
      <PawsUpProjectCard/>
      <TellTaleProjectCard/>
      </div>
    )
  }
}


export default ProjectContainer
