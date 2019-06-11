import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/purchaseActions'
import {Link} from "react-router-dom";

 class Home extends Component{



    render(){
        return(
            <div className="container">
                <h3 className="center">Welcome</h3>
                <div className="center">
                    <Link to="/products"><i className="material-icons">input</i></Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)