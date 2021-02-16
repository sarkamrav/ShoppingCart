import React,{lazy,Suspense} from 'react';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/shop/shopcomponent'
import {BrowserRouter as Router, Route,Link,Switch, withRouter,Redirect} from 'react-router-dom';
import Header from './component/Header'
import Login from './pages/login/Login'
import Checkout from './pages/cart/checkout'
import WishList from './pages/cart/wishlist'
import ProtecteRoute  from './protectedRoute';
import ProductDetail from './pages/cart/productdetail';
import OrderDetails from './pages/cart/orderdetails';



const App =() =>{
  return (
    <Router>
<Header/>
      <Switch>
      <ProtecteRoute path ='/' component ={Home} exact/> 
      <ProtecteRoute path ='/shop' component ={Shop} /> 
      <Route path ='/login' component ={Login} exact/>
      <ProtecteRoute path ='/checkout' component ={Checkout} exact />
      <ProtecteRoute path ='/wishlist' component ={WishList} exact/>
      <ProtecteRoute path ='/productdetails' component ={ProductDetail} exact />
      <ProtecteRoute path ='/orderdetails' component ={OrderDetails} exact />
      <Route render={() => <Redirect to="/" />} />
     </Switch>
  </Router>
  );
  }

export default withRouter(App);
