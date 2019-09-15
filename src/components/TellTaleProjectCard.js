import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class TellTaleProjectCard extends Component {
  render(){
    return(<div style={{display:"inline-block"}} class="ui card">
  <div class="image">
    <img src="adam-gordon-burner-hat.png"/>
  </div>
  <div class="content">
  TellTale
    <div class="meta">
      <span class="date">Created in May 2019</span>
    </div>
    <div class="description">
      Have a great idea for a story? This organizing and writing app is for you!
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


export default TellTaleProjectCard
