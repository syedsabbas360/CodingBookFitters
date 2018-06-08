import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


 export default class Home extends Component {
  render() {
    return (
      <div>
      <div className="Home w3-card-4">
           <h3>Welcome to Coding BookFitters, your #1 source to learn coding! We're dedicated to giving you the very best of coding resources, with a focus on skill levels ranging from beginners, intermediate to advanced.</h3>
           <h3 className="homeCardText">
             Whether you're here to take your first steps into learning a programming language or simply want to sharpen your already awesome skills and propel to the next level - we've got your covered!
           </h3>
      </div>
    </div>
    );
  }
}
