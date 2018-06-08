import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink, Link} from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    return (

      <div className="BaseLayout">

        <div className="w3-container">
          <img href= "http://icons.iconarchive.com/icons/martz90/circle/64/books-icon.png"/>
          <h1>Coding BookFitters</h1>
          <h2>Your Premier HQ for Coding Resources!</h2>
        </div>

        <nav className="w3-bar w3-green">

          <NavLink to ='/' className="w3-bar-item w3-button" activeStyle={{color: "white"}}> Home </NavLink>
          <NavLink to ='/Beginners' className="w3-bar-item w3-button" activeStyle={{color: "white"}} > Beginners </NavLink>
          <NavLink to ='/Intermediate' className="w3-bar-item w3-button" activeStyle={{color: "white"}} > Intermediate </NavLink>
          <NavLink to ='/Advanced' className="w3-bar-item w3-button" activeStyle={{color: "white"}}> Advanced </NavLink>
          <NavLink to ='/About' className = "w3-bar-item w3-button" activeStyle={{color: "white"}}> About </NavLink>
          <NavLink to ='/Contact' className = "w3-bar-item w3-button" activeStyle={{color: "white"}}> Contact </NavLink>
        </nav>

        {this.props.children}

      </div>

    );
  }
}
