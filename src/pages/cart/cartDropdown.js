import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import Cartitem from './cartItem';
import {withRouter} from 'react-router-dom';
import {toggleDropdown} from './cartaction';
const Wrapper = styled.div`
.abc{
   opacity:0.4;
}
   overflow: scroll;
    position: absolute;
    width: 240px;
    background: lightgrey;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    .cart-items {
      height: 240px;
      display: flex;
      flex-direction: column;

    }
  
    button {
     cursor:pointer;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      bottom:10px;
      width:60%;
      color:white;
      background:black;
      height:30px;
    }
  
`;
const CartDropdown = ({hidden,listData,history,dispatch}) => {
    console.log("state",hidden);
    return (
        <div>
        { hidden ?  (<Wrapper>
            <div className='cart-items'>
            {listData.length > 0 ? listData.map(item=>{
                return(
                <Cartitem  key ={item.id} item ={item}/>
                )
            }) :<div>no item in the cart</div>}
            </div>
            <button  className ={listData.length ===0 ?'abc':null } disabled = {listData.length ===0 } onClick={()=>{
                history.push('/checkout');
                 dispatch(toggleDropdown());
                }}>GO TO CHECKOUT </button>
        </Wrapper>) : null }
        </div>
 
    )
}


const mapStateToProps =(state)=>({
    hidden:state.cartReducer.hidden,
    listData : state.cartReducer.cartitems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
