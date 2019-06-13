import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import { addToCart } from './actions/purchaseActions'

class LoginSuccesfullPage extends Component{



    render(){
        return(
            <div className="container">
                <h3 className="center">Welcome</h3>
                <div className="user col-md-6 col-md-offset-3">
                    <div className="row">
                        <hr className="col-md-12"/>
                        <h4 className="col-md-8">Signed in</h4>
                        {/*<div className="col-md-4 text-right">*/}
                        {/*    <img src="@user.avatarURL.getOrElse(assets.path(" images/silhouette.png"))" height="40px"/>*/}
                        {/*</div>*/}
                        <hr className="col-md-12"/>
                    </div>
                    <div className="row data">
                        <div className="col-md-12">
                            <div className="row">
                                <p className="col-md-6"><strong>first.name</strong></p><p
                                className="col-md-6">user.firstName</p>
                            </div>
                            <div className="row">
                                <p className="col-md-6"><strong>last.name</strong></p><p
                                className="col-md-6">user.lastName</p>
                            </div>
                            <div className="row">
                                <p className="col-md-6"><strong>full.name</strong></p><p
                                className="col-md-6">user.fullName</p>
                            </div>
                            <div className="row">
                                <p className="col-md-6"><strong>email</strong></p><p
                                className="col-md-6">user.email</p>
                            </div>
                        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(LoginSuccesfullPage)