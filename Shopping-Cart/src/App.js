import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Purchase from './components/Purchase'
import Products from './components/Products'
import Categories from './components/Categories'
import Sales from './components/Sales'
import ProductForm from "./components/ProductForm";
import CategoryForm from "./components/CategoryForm";
import SaleForm from "./components/SaleForm";
import LoginHome from "./components/LoginHome";
// import LoginMaterialize from "./components/LoginMaterialize";

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/purchases" component={Purchase}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/sales" component={Sales}/>

                    <Route path="/product"  component={ProductForm}/>
                    <Route path="/category"  component={CategoryForm}/>
                    {/*<Route path="/purchase" component={PurchaseForm}/>*/}
                    <Route path="/sale" component={SaleForm}/>
                    <Route path="/login" component={LoginHome}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
