import { BubbleChartOutlined } from '@material-ui/icons';
import React,{useState} from 'react'
import styled from 'styled-components';
import {addToCart,addToWishlist} from '../pages/cart/cartaction'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FlashMesaage from'./FlashMesaage';
import {wishList} from '../pages/cart/cartselector';

const Wrapper = styled.div`
.filled{
    fill:red; 
}
    width: 100%%;
    flex:1;
    display: flex;
    flex-direction: column;
    height: 350px;
    position:relative;
    align-items: center;
    button{
      display:none;
    }
    background-size:cover;
    .image {
      background-image: url(${props => props.img});
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
      }
    }
   .image:hover ~ button{
      background:black;
      display : block;
      position:absolute;
      font-size:14px;
      color:white;
      bottom:20vh;
      width:70%;
      height:40px;
      z-index:1;
      
    }
    .heart{
        align-items: center;
        display: flex;
        span:nth-child(2):hover{
          cursor:pointer
        }
    }
    button: hover {
      cursor: pointer; 
      background:black;
      display : block;
      position:absolute;
      font-size:14px;
      color:white;
      bottom:20vh;
      width:70%;
      height:40px;
      z-index:1;
    }
    .collection-footer {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      .name {
        width: 90%;
        margin-bottom: 15px;
      }
      .price {
        width: 10%;
      }
    }  
  `

  
  const CollectionItem = ({item,addToCart,history,getwishlist,wishlistItem}) => {
  const [wishList,updatedwishlist] = useState('');
  const [heart,updatedheart] = useState('');
  const [flashmesaage,updatedFlashMesaage] = useState(false);
  const [clicked,updatedclicked] = useState(false);
  
  const {name,price,imageUrl,wishlist} = item;

  const getData =(item,wishlistItem)=>{
    getWishListClass(item,wishlistItem);
    getwishlistfunction(item);
  }
  const getWishListClass = (item,wishlistItem) =>{
    const itemExist = wishlistItem.find(wishlistitem=>wishlistitem.id===item.id)
  }
  const getwishlistfunction = (item) =>{
    getwishlist(item);
    updatedclicked(true);
    updatedFlashMesaage(!flashmesaage);
    if(heart == ''){
      updatedheart(true);
    } else {
      updatedheart(!heart);
    }
  }
    return (
        <Wrapper className ='wrapper' img ={imageUrl}>
         {flashmesaage == true && heart == true && <FlashMesaage text ={`added ${name} to Wishlist`} time = '3000'/>  }
         {flashmesaage == false && heart == false && clicked==true  && <FlashMesaage text ={`removed ${name} to Wishlist`} time ='3000'/>}
        <div className = 'image'/>
        <div className= 'collection-footer'></div>

           <span className='name'>{name}</span> 
           <div className ='heart'>
           <span className ='price'>{price}</span>
           <span onClick ={()=>getData(item,wishlistItem)}> <svg  xmlns="http://www.w3.org/2000/svg" height="24"  width="24"><path  className = {heart === true ?'filled' : null} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" stroke= "coral"/></svg></span>
           </div>
     <button onClick={()=>history.push({pathname:'/productdetails',
     search: `?id=${item.id}`})}>View Details</button>
        </Wrapper>
    )
}


const mapStateToProps = (state ) =>({
  wishlistItem: wishList(state)
})

const mapDispachToProps = (dispatch)=>({
  getwishlist :(item) =>dispatch(addToWishlist(item))
})
export default withRouter(connect(mapStateToProps,mapDispachToProps)(CollectionItem)) ;