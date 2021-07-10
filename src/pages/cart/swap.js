import React,{useState,useEffect,useReducer} from 'react';
import styled from 'styled-components';
import {selectedItem, selectAll,swapItem,swapedItem,swapedItemSelected} from './util'

const Wrapper = styled.div`
    width: 500px;
    border:1px solid black;
    backgroundColor:white;
    min-height: 100px;`
    
    const WDiv = styled.div`
    display: flex;
   `

   const WRoot = styled.div`
   display: flex;
   margin-top:15px;`

  const  TitleWrapper = styled.div`
  display:flex;
  div{
      margin-right:5px;
  }
  `;
    

const WSpan = styled.button`
 background: ${props => props.isActive?'lightskyblue':'white'};
width:auto;
display:flex;
height:30px;
backgroundColor:white`

const Button = styled.button`
height: 41px;
margin: 4%;
`

   
const reducer =(state,action)=>{
    switch (action.type){
        case 'SUBMITDATA':
            return   { ...state ,
                item:state.item.concat([{item:action.payload.item,isActive:false,swapitem:false}])}
        case 'ADD_TO_SWAP':
            return {...state,
                item:selectedItem(state.item,action.payload),
            }
                case 'ADD_BACK_TO_SWAP':
                    return {...state,
                        swapitem:swapedItemSelected(state.swapitem,action.payload)}
        case 'SELECT_ALL':
            return {...state,
                item:selectAll(state.item)}
        case 'SWAP_ITEM':
            return  {...state,
                item:swapItem(state.item,state.swapitem),
                swapitem:swapedItem(state.item,state.swapitem),
            }
        case 'CLEAR_ALL':
            return {...state,
                swapitem:[]}
            default:
                return state;
    }
    
}

const Swap = ()=>{
const [data,dispatch] = useReducer(reducer,{item:[],swapitem:[]})
const [swapitem,updatedswapitem] = useState([])

let [item,updatedItem] = useState('');

useEffect(()=>{
    dispatch({type:'SWAP_ITEM'});
},[item,swapitem])

const nameChangeHandler =(e)=>{
    updatedItem(e.target.value)
}

const swapdata =()=>{
    // updatedswapitem(data.item);
    dispatch({type:'SWAP_ITEM'});
    // dispatch({type:'SWAP_ITEM_DATA'});
}


const submitData =(e) =>{
    // updateddata(value =>[...value,{item,price}]);
    // updatedItem('');
    // updatedPrice('')
// if(e.target.value.length>0){
 
    e.preventDefault();
    if(item.trim().length>0)  {
dispatch({
        type :'SUBMITDATA',
payload:{
    item,
}
});

updatedItem('');
    }
// }   
}
console.log("state",swapitem);

return (
        <>
     <TitleWrapper>
      <div>Add Items to the Swapper: </div>
      <input type = 'text' name ='item' value ={item} onChange ={(e)=>nameChangeHandler(e)} />
    <button onClick ={submitData} >Add</button>
    </TitleWrapper>
  <WRoot>

    <div>
    Available: <button onClick={()=>{dispatch({type:'SELECT_ALL'})}}>SelectAll</button>
    <Wrapper>
 
    {data.item && data.item.length>0&&(
      <WDiv>
        {data.item.map((data1,index)=>{
            return( <WSpan id ={index} isActive ={data1.isActive} onClick={()=>{dispatch({type:'ADD_TO_SWAP',payload:{index}})}}>{data1.item}</WSpan> 
                )
        })}
    </WDiv>
        
    )}
    
        </Wrapper>
    </div>
  <Button onClick={swapdata}> &#8644;</Button>
 <div>
 Selected: <button onClick={()=>{dispatch({type:'CLEAR_ALL'})}}>Clear All</button>
        <Wrapper>
     
        {data.swapitem && data.swapitem.length>0&&(
      <WDiv>
        {data.swapitem.map((data1,index)=>{
        return    (
                <WSpan id ={index} isActive ={data1.isActive} onClick={()=>{dispatch({type:'ADD_BACK_TO_SWAP',payload:{index}})}}>
                    {data1.item}
                </WSpan>
            
        ) 
        })}
    </WDiv>
        
    )}
        </Wrapper>
 </div>
       
        </WRoot>
    </>
    )
    
}

export default Swap;