import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {removeItem,addToCart,clearItem} from './cartaction';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
  
    .image-container {
      width: 23%;
      padding-right: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name,
    .quantity,
    .price {
      width: 23%;
    }
  
    .quantity {
      display: flex;
      padding-left: 0px;
      justify-content: space-evenly;
      div{
        cursor:pointer;
      }
    }
  
    .remove-button {
      padding-left: 12px;
      cursor: pointer;
    }
  
  `;
const CheckoutItem =({cartItem,clearitem,removeitem,addtocart})=> {
 const  {imageUrl,name,quantity,price} = cartItem;
    return (
        <Wrapper>
        <div className='image-container'>
            <img src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
       <span className='quantity'>
       <div onClick={()=>removeitem(cartItem)}> &lt;</div>
       {quantity}
       <div onClick={()=>addtocart(cartItem)}>&gt;</div></span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick ={()=>clearitem(cartItem)}>&#10006;</div>
        </Wrapper>
    )
}
const mapDispatchToProps = dispatch=>({
  clearitem : (cartItem)=>{dispatch(clearItem(cartItem))},
  removeitem : (cartItem)=>{dispatch(removeItem(cartItem))},
  addtocart : (cartItem)=>{dispatch(addToCart(cartItem))},
})
export default connect(null,mapDispatchToProps )(CheckoutItem)