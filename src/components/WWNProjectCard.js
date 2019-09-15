import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class WWNProjectCard extends Component {
  render(){
    return(<div style={{display:"inline-block"}} class="ui card"> 
  <div class="image">
    <img src="adam-gordon-burner-hat.png"/>
  </div>
  <div class="content">
  Words With Nerds
    <div class="meta">
      <span class="date">Created in April 2019</span>
    </div>
    <div class="description">
      This is an unusually fun word game!
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      1000+ plays
    </a>
  </div>
</div>)
  }
}


export default WWNProjectCard
