import React,{useState} from 'react'
import MenuItem from '../component/MenuItem'
import styled from'styled-components';
import {withRouter} from 'react-router-dom';
import './home.css'

const DashBoardWrapper =styled.div`
.homepage{
    color: black;
    font-size: 20px;
    font-weight: bold;}`
    
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

const  Home = () => {
const [section]= useState( [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }

      
    ])
    return (
      <DashBoardWrapper>
        <div className='homepage'>
          <p>Welcome To DashBoard</p>
        <Wrapper>
         {section.map(({id, ...otherprops})=>{
             return(
                 <MenuItem key ={id} {...otherprops}></MenuItem>
             )
         })
        }
        </Wrapper>
        </div>
      </DashBoardWrapper>
    )
}


export default Home;