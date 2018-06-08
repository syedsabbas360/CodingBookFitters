import React, { Component } from 'react';
import data from '../data/data'
import {Link} from 'react-router-dom';
import '../styles/App.css';



 export default class ShowItem extends Component {

   constructor(props) {
      super(props)
      this.state = {
        image:'',
        name: '',
        author: '',
        price: '',
        amazonLink: ''
}

  this.setState({

    image: data.image,
    name: data.name,
    author: data.author,
    price: data.price,
    amazonLink: data.amazonLink

});
}



   render() {
     return (

       <div className="Beginners">

          <h5>{this.state.name}</h5>
          <div className="w3-card-4" style={{width:"50%"}}>
          <img src={this.state.image}/>
          <h5 className="author">{this.state.author}</h5>
          <h6 className="price">${this.state.price}</h6>
          </div>



       </div>
     )
   }
}
