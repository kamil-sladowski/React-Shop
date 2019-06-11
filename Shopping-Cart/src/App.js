import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Purchase from './components/Purchase'
import Products from './components/Products'
import Categories from './components/Categories'
import Sales from './components/Sales'

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
                    {/*<Route path="/admins" component={Admins}/>*/}
                    {/*<Route path="/users"  component={Users}/>*/}

                    {/*<Route path="/product"  component={ProductForm}/>*/}
                    {/*<Route path="/category"  component={CategoryForm}/>*/}
                    {/*<Route path="/purchase" component={PurchaseForm}/>*/}
                    {/*<Route path="/register_admin" component={AdminRegisterForm}/>*/}
                    {/*<Route path="/login_admin" component={AdminLoginForm}/>*/}
                    {/*<Route path="/register_user" component={UserRegisterForm}/>*/}
                    {/*<Route path="/login_user" component={UserLoginForm}/>*/}
                    {/*<Route path="/sale" component={SaleForm}/>*/}
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
