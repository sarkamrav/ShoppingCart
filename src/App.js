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
import Todo from './pages/cart/todo';
import Next from './pages/cart/next';
import Swap from './pages/cart/swap';
import Test from './pages/cart/test';
import Counter from './pages/cart/counter';
import {ShareContext} from './createContext';
import { reducer } from 'redux-form';
import {initial_state,count_reducer} from './reducer'
const App =() =>{
  return (
    <ShareContext reducer ={count_reducer} initialstate ={initial_state}>
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
      <Route path ='/counter' component ={Counter} exact />
      <Route path ='/todo' component ={Todo} exact/>
      <Route path ='/swap' component ={Swap} exact/>
      <Route path ='/next' component ={Next} exact/>

      {/* <Route path ='/carbon' component ={Carbon} exact /> */}
      <Route render={() => <Redirect to="/" />} />
     </Switch>
  </Router>
  </ShareContext>
  );
}


export default withRouter(App);
