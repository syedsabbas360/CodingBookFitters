import React, { Component } from 'react';
import '../styles/App.css';
import data from '../data/data'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

 export default class Advanced extends Component {
  render() {
    return (
      <div className="Advanced  cards">
      {data[2].items.map((advanced) => <div className="col-sm-6" key={data[2].name}>


       <Link to={`/ShowItem/${advanced.id}`} ><h5 className="title">{advanced.name}</h5></Link>
         <div className="w3-card-4">
           <div className="allInfo">
             <img src={advanced.image}/>
             <h5>{advanced.author}</h5>
             <h6>${advanced.price}</h6>
             <a href={advanced.amazonLink}>Buy Now</a>
           </div>


       </div>

      </div>)}


      </div>
    );
  }
}
