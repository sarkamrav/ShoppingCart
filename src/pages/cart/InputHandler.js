import React,{useState} from 'react';


const Input =(props)=>{
    const nameChangeHandler =(e) =>{
        props.deep(e.target.value)
    }
    return(
        <>
        Name:<input type ="text" value ={props.childname} onChange ={nameChangeHandler} />
        </>
    )
}

export default Input;