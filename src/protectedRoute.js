import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from'react-redux';

const protecteRoute =({component:Component,isLoggedIn, ...rest})=>{
    console.log("isauth",isLoggedIn);
    // const islog = localStorage.getItem('loggedIn')
    // console.log("log",islog);
    return (
        <div>
        <Route {...rest} render ={(props)=>{
           return isLoggedIn === true ?<Component {...props}/>:<Redirect to = '/login' />
        } }/>
    </div>
    )
}
const mapStateToProps =(state) =>({
    isLoggedIn:state.cartReducer.loggedIn
})

export default connect(mapStateToProps)(protecteRoute);