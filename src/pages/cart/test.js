import React,{useState} from 'react'
import Input from './InputHandler';
import Button from './button'
const Test = () =>{
    const [name,updatedname]=useState('');
    const [password,updatedpassword]=useState('');
    const [data,updateddata] =useState([]);
const [childname,updatedchildname] = useState('');

    const nameChangeHnadler =(e)=>{
       updatedname(e.target.value)
    }
  
    const passwordChangeHnadler =(e)=>{
        updatedpassword(e.target.value)
     }
     const nameChange =(e)=>{
        updatedchildname(e)
     }
     

    //  const submithandler =(e)=>{
    //      e.preventDefault()
    //      console.log("data",name,password)
    //  }
    const submithandler =(e) =>{
        e.preventDefault();
        if(name.trim().length>0 && password.trim().length>0){
            updateddata([...data,{name,password,id:name}])
            updatedname('');
            updatedpassword('');
        }
    
    }
    const deleteHandler =(id)=>{
        console.log("id",id)
       updateddata( data.filter(v=> v.name !== id))
}

const handleSubmit =()=>{
    if(childname.trim().length>0){
        updateddata([...data,{childname,id:childname}])
        updatedchildname('');
    }
   
}
    
    console.log("updateddata",data);
    return (
        <>
        <div> welcome to login page </div>
        <form onSubmit={submithandler}>
            name :  <input type ="text"  value ={name}  onChange ={nameChangeHnadler} />
            password :  <input type ="password"  value ={password}   onChange ={passwordChangeHnadler}/>
            <button>Submit </button>

        </form>
        <Input value ={childname} deep ={nameChange} />
        <Button  submit ={handleSubmit}/>
        
        {data && data.length>0 && data.map((values,index)=>{
            return(
                <div>
                    <span id={values.childname}>{values.childname}</span> <button onClick ={(id)=>deleteHandler(values.id)}>delete</button>
                </div>
            )
        })}
    
        </>
        )
}
export default Test;