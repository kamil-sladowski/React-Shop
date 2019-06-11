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
                    <div>
                        <Link to="/products"><i className="material-icons">input</i> Show Products </Link>
                    </div>
                    <div>
                        <Link to="/product"><i className="material-icons">library_add</i> Add products </Link>
                    </div>
                    <div>
                        <Link to="/categories"><i className="material-icons">category</i> Show Categories </Link>
                    </div>
                    <div>
                        <Link to="/category"><i className="material-icons">category</i> Add Categories </Link>
                    </div>

                    <div>
                        <Link to="/sales"><i className="material-icons">money_off</i> Show Sales </Link>
                    </div>

                    <div>
                        <Link to="/sale"><i className="material-icons">money_off</i> Add sale </Link>
                    </div>

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