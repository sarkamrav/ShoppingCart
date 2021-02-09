import React,{Fragment} from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckoutItem from './checkoutitem';
import Stripebutton from'../stripepayment/stripebutton';
const Wrapper = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
  
    .checkout-header {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;
      .header-block {
        text-transform: capitalize;
        width: 23%;
  
        &:last-child {
          width: 8%;
        }
      }
    }
  
    .total {
      margin-top: 30px;
      margin-left: auto;
      font-size: 36px;
    }
  `;
const checkout = ({cartItem}) => {
  const getPrice = (cartItem)=>{
   return cartItem.reduce((sum,cartitem)=>{  
      if(cartitem.price) return (cartitem.quantity*cartitem.price)+sum;
      else return sum;
    },0)
  }
    return (
        <Wrapper>
        {cartItem. length > 0 &&   <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div> 
        </div>}
        {cartItem. length > 0 ? cartItem.map(cartItem =><CheckoutItem cartItem ={cartItem} />) : <h3>No item to check out</h3>}
        {cartItem. length > 0 &&  <Fragment> 
          <div>total price</div>
        <div>{getPrice(cartItem)}</div> </Fragment> } 

        {cartItem. length > 0 &&   <Stripebutton price ={getPrice(cartItem)}/>}
        </Wrapper>
    )
}

const mapStateToProps =(state)=>({
    cartItem : state.cartReducer.cartitems
})

export default withRouter(connect(mapStateToProps)(checkout))
