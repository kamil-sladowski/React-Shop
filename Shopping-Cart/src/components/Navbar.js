import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shop</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/purchases">My cart</Link></li>
                        <li><Link to="/purchases"><i className="material-icons">shopping_cart</i></Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;