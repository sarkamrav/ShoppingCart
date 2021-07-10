import React,{useState,useEffect,useReducer} from 'react';
   
const reducer =(state,action)=>{
    switch (action.type){
        case 'SUBMITDATA':
            return[
             ...state,{
               item: action.payload.item,
               price: action.payload.price,
             }
             
            ]
            default:
                return state;
    }
}

const Todo = ()=>{
const [data,dispatch] = useReducer(reducer,[])
// const [data,updateddata] = useState([])

let [item,updatedItem] = useState('');
let [price,updatedPrice] = useState('');


const nameChangeHandler =(e)=>{
    updatedItem(e.target.value)
}
const priceChangeHandler =(e)=>{
    updatedPrice(e.target.value)
}
const submitData =(e) =>{
    // updateddata(value =>[...value,{item,price}]);
    // updatedItem('');
    // updatedPrice('')

    e.preventDefault();
    dispatch({
        type :'SUBMITDATA',
payload:{
    item,
    price
}
});
updatedItem('');
updatedPrice('');
}
console.log("state",data);
return (
        <>
      <div>Add Items to the cart</div>
      <input type = 'text' name ='item' value ={item} onChange ={(e)=>nameChangeHandler(e)} />
      <input type = 'text' name ='price' value ={price} onChange ={(e)=>priceChangeHandler(e)} />
    <button onClick ={submitData} >Submit</button>
    {data && data.length>0&&(
        <>
        {data.map(data1=>{
            return( <div><span>{data1.item}</span> <br></br>
                <span>{data1.price}</span><br></br>
                <span>----------------------------------------</span>
                </div>
                )
        })}
    
        </>
    )}
    </>
    )
    
}

export default Todo;