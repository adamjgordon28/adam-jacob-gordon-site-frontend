import React, { Component } from 'react';
import '../App.css';
import WWNProjectCard from '../components/WWNProjectCard.js';
import TellTaleProjectCard from '../components/TellTaleProjectCard.js';

class ProjectContainer extends Component {
  render(){

    return(
      <div>
      <WWNProjectCard/>
      <TellTaleProjectCard/>
      </div>
    )
  }
}


export default ProjectContainer
