import React ,{useContext,useState} from 'react';

import {AppProvider} from '../../createContext';

 

const Counter =() =>{

    const {state,dispatch}  = useContext(AppProvider)


    return(
        <>
        <div>Hi Counter {state.count}</div>

        <button onClick ={()=>dispatch({
            type: "INCREMENT",
          })} >hh</button>
        </>
    )
} 

export default Counter;