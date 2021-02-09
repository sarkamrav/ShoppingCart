import React,{useState} from 'react';
 import {connect} from 'react-redux';
import {toggleDropdown} from'./cartaction';
import styled from 'styled-components';
import {selectcartitemcount, wishlistCount} from  '../cart/cartselector';
import {withRouter} from 'react-router-dom'
const Wrapper = styled.div`
display:flex;
cursor: pointer;
.cart{
    display:flex;
 width:100px;
}
.wishlist{
    display:flex;
    margin-right:20%;

}
`
const Carticon = ({toggleCartButton,cartquantity,wishlist,history}) => {
    console.log("cartquant",cartquantity);
    const count = useState(0);
    return (
        <Wrapper>
         <div className ='wishlist'>
            <div onClick ={()=>history.push('/wishlist')}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24"  width="24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" stroke= "coral"/></svg>
            </div>
             <span>{wishlist}</span>
         </div>
         <div className = 'cart' onClick ={toggleCartButton}>
        
            <span >Cart</span>
           { cartquantity}

        </div>
            </Wrapper>
    );

   
}
const mapStateToProps = (state) =>({
    cartquantity : selectcartitemcount(state),
    wishlist: wishlistCount(state)
});

const mapDispatchToProps =(dispatch) =>({
    toggleCartButton :()=>dispatch(toggleDropdown())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Carticon));
