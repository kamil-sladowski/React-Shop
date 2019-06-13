import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import { addToCart } from './actions/purchaseActions'


const facebookLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png";
const googleLogoUrl = "https://www.ispro.pl/wp-content/uploads/2014/01/google+logo.png";
const basketLogoUrl = "https://pl.seaicons.com/wp-content/uploads/2017/02/shopping-basket-icon.png";


class LoginHome extends Component{



    render(){
        return(
            <div className="container">
                <h3 className="center">Log in</h3>
                <div className="center">
                    <ul>
                        <li><a href="http://localhost:9000/authenticate/facebook"><img src={facebookLogoUrl} height="30"
                                                                                       alt="facebook"/></a></li>
                        <li><a href="http://localhost:9000/authenticate/google"><img src={googleLogoUrl} height="30"
                                                                                     alt="google"/></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginHome)