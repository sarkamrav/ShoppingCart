import React ,{useState} from 'react';

const Next = ()=>{
    const [count,updatecount]= useState(0);
    const  items = [
        {"name":"deepak"},
        {"name":"Ravi"},
        {"name":"Shaludi"},
        {"name":"Meenu"},
        {"name":"XYZ"},
    ]
    const ABC = () =>{
        for(var i=0;i<items.length;i++){
          if(i==count){
              return <span>{items[i].name}</span>
          }
        }
    }
    const previous =() =>{
        updatecount((data)=>data-1)
    }
    const next =() =>{
        updatecount((data)=>data+1)
    }

    return (
        <div>
         <ABC/>
         <button onClick ={previous} disabled ={count == 0 ? true :false}>Previous</button> 
         <button onClick ={next} disabled ={count == items.length-1?true:false}>Next</button>
         <button onClick ={()=>updatecount(0)} >Suffle</button>
        </div>
    );
}

export default Next;