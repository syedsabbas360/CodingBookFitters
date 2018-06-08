import React, { Component } from 'react';
import data from '../data/data'
import '../styles/App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


 export default class Beginners extends Component {
   render() {
     return (

         <div className="Beginners cards">
           {data[0].items.map((beginners) => <div className="col-sm-6" key={data[0].name}>


           <Link to={`/ShowItem/${beginners.id}`} ><h5 className="title">{beginners.name}</h5></Link>

              <div className="w3-card-4" >
                <div className="allInfo">
                  <img src={beginners.image}/>
                  <h5>{beginners.author}</h5>
                  <h6>${beginners.price}</h6>
                  <h6></h6>
                  <a href={beginners.amazonLink}>Buy Now</a>
                </div>


            </div>

           </div>)}
         </div>
     )
   }
 }
