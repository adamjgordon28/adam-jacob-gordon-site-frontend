import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class PawsUpProjectCard extends Component {
  render(){
    return(<div style={{display:"inline-block"}} class="ui card">
  <div class="image">
    <img src="adam-gordon-burner-hat.png"/>
  </div>
  <div class="content">
  TellTale
    <div class="meta">
      <span class="date">Created in April 2019</span>
    </div>
    <div class="description">
      Looking for the perfect pet? PawsUp has you covered!
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      Countless Users!
    </a>
  </div>
</div>)
  }
}


export default PawsUpProjectCard
