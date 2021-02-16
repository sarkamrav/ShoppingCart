import React,{useEffect} from 'react'
import styled from'styled-components';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchdataload} from '../pages/cart/cartaction'

const Wrapper = styled.div`
:hover{
  cursor:pointer; 
}
background-image: url(${props => props.img});
background-size:cover;
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
   height : ${props => props.size == 'large' ? '340px':'240px'};
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
  
    .content {
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color:white;
      opacity:0.7;
      .title {
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
        color: #4a4a4a;
      }
  
      .subtitle {
        font-weight: lighter;
        font-size: 16px;
      }
    }
  
  `
const MenuItem = ({title,id,imageUrl, size,linkUrl,match,fetchdata, ...props}) => {

  console.log("histiry",props)
    return (
        <Wrapper img ={imageUrl} size ={size}>
      
            <div className='content' onClick ={()=>props.history.push(`${match.url}${linkUrl}`)}>
                <h1 className = 'title'>{title}</h1>
                <span className='subtitle'>Shop Now</span>
                <div>{size}</div>
            </div>
       
        </Wrapper>
    )
}


const mapDispatchToProps = dispatch =>({
  fetchdata:()=>dispatch(fetchdataload())

})

export  default connect(null,mapDispatchToProps)(withRouter(MenuItem))