import React, { Component } from 'react';
import data from '../data/data'
import '../styles/App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


 export default class Contact extends Component {
   render() {
     return (

         <div className="Contact">
           <h1>Contact Us</h1>
           <h3>Have Suggestions on books you'd like to see featured?  Shoot us an email, we'd love to hear from you!</h3>
           <a className="contactEmail"href="mailto:stellardigitaldesign@gmail.com">Email Us!</a>

         </div>
     )
   }
 }
