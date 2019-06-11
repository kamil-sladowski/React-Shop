import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Purchase from './components/Purchase'
import Products from './components/Products'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/purchase" component={Purchase}/>
                    <Route path="/products" component={Products}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
