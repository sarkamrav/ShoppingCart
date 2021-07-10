import React,{useState,useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import {addToCart} from './cartaction';
import {connect} from 'react-redux';
import {selectcartitems} from './cartselector';
import SHOP_DATA from '../shop/shopdata'
import style from 'styled-components';

const Wrapper =style.div`
   padding:20px;`;
const getdata = (shopdata, id) =>{
   return shopdata.map(shopdata=>shopdata.items)
}
const ProductDetail = (props) =>{

    const [cartitem, updatedcartitem] = useState(SHOP_DATA);
    const [cart, updatedcart] = useState(0);

    const {addtocart,history} =props;

    const queryParams = new URLSearchParams(props.location.search);
    const matchid = queryParams.get('id');
   
    const data = getdata(cartitem,matchid)
        const arr =[];
        for(var i = 0; i < data.length;i++){
        for(var j = 0; j < data[i].length; j++){
        arr.push(data[i][j]);
     }
    }

   const aaa = arr.filter(data => data.id ==matchid)

   function todo(){
    updatedcart(1);
    addtocart(aaa[0])
    }

    return (
        <Wrapper>
        <div>
            welcome to product detail
      <div>{arr[0].name}</div>
     <img src={aaa[0].imageUrl} />
      {cart  == 0 ?  <button onClick ={todo}>add to cart</button> :<button onClick = {()=>updatedcart(2)} >go to cart</button> }

      {cart == 2   &&<button onClick = {history.push('/checkout')} />}
      </div>
      </Wrapper>
    )
  
}


const mapDispatchToProps =(dispatch)=>({

    addtocart : (detail)=>dispatch(addToCart(detail))
})
export default withRouter(connect(null,mapDispatchToProps)(ProductDetail))
