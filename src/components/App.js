import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout.js'
import ShowItem from './ShowItem.js'
import Home from './Home.js';
import Beginners from './Beginners.js';
import Intermediate from './Intermediate.js';
import Advanced from './Advanced.js';
import About from './About.js';
import Contact from './Contact.js';


class App extends Component {
  render() {
    return (
      <div className="App">

      <BrowserRouter>
          <BaseLayout>
            <Switch>
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Beginners" component={Beginners} />
            <Route path="/Intermediate" component={Intermediate} />
            <Route path="/Advanced" component={Advanced} />
            <Route path='/ShowItem/:id' component={ShowItem} />
            <Route path="/" component={Home} />


            </Switch>
          </BaseLayout>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
