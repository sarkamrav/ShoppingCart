import React,{useState} from 'react';
import {connect} from 'react-redux';
import styled from'styled-components'

const Wrapper =styled.div`
div{
    display:flex;
    justify-content: space-around
}
`
const Header =styled.div`
    display:flex;
    justify-content: space-around;
    font-weight: bold;
`

const OrderDetails =({orderdetails})=>{
    const currentDay = useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
    console.log("orderdetails",orderdetails);
    const getDate =(data)=>{
     const current  =  new Date(data.date).getDay()
     console.log("current",current)
        return currentDay[current]
        
    }
    return(
        <>
        <div>Order Details</div>
        <Header>
            <div> Ordered Item</div>
            <div>Ordered Date</div>
            <div> Timestamp</div>
            </Header>
        <hr/>
        { orderdetails && orderdetails.map(data =>(
            <>
           
            <Wrapper>
            <div>
                {data.name}
             <div>
                <span>{new Date(data.date).getDate()}-</span>
                <span>{new Date(data.date).getMonth()}-</span>

                <span>{new Date(data.date).getFullYear()}</span>
            </div>
                <div>
                    <span>{new Date(data.date).getHours()}</span>Hours
                    -<span>{new Date(data.date).getMinutes()}</span>Minutes

                -<span>{new Date(data.date).getSeconds()}</span>Second
                </div>
          

            </div>
            </Wrapper>
            <hr/>
            </>
            
        ))
    }
        </>
        
    )

}
const mapStateToProps =(state)=>({
    orderdetails:state.cartReducer.orderedItems
})
export default connect(mapStateToProps)(OrderDetails);