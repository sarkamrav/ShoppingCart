import React,{useEffect} from 'react'
import {Field,reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { useHistory,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {logIn,getData,getDataJson,fetchdataload} from '../cart/cartaction';
import styled from 'styled-components';

const Wrapper = styled.div`
span{
  display:flex;
  color:red;
}
button{
  margin-top: 10%;
  border-radius: -16%;
  background: black;
  color: white;
  cursor:pointer;
}
.login{
  font-weight:bold;
  font-size:20px
}
display:flex;
flex-direction:column;
width:20%;
margin:auto;
text-align:center;
margin-top:10%;
.MuiFormControl-root{
  width:100%
}
`

const validate = values => {
  const errors = {}
  console.log("error",values)
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}



let Login = (props) => {
  console.log("logindata",props.logindata);
const {handleSubmit, invalid}= props;

/* custom render component */
const render =(props) =>{
const{ input,label, type, meta: { touched,visited, error }} =  props;
  return(
<div>
<TextField
{...input}
label={label}
type={type}
/>
{touched && error && <span>{error}</span>}
</div>
  )
}


  const submit = (submitdata)=>{
  let loggedIn = false;
  props.login(submitdata)
 
  }
    return (
      <Wrapper>
        {props.isLoggedIn ? <Redirect to="/"/>:
      <form onSubmit={handleSubmit(submit)}>
        <p className ='login'>User Login</p>
        {props.errorMessage.length>0?<div style= {{color:'red'}}>{props.errorMessage}</div>:null}
        
        <div>
          <Field name="email" label ="Email" component= {render}  type="email" />
        </div>
        <div>
          <Field name="password" label ="Password" component= {render}  type="password" />
        </div>
  {/*<button type="submit"   disabled={invalid}>Submit</button> */}
   <button type="submit">Submit</button>

      </form>
}
    </Wrapper>
    )
}

const mapStateToProps = state=>({
  isLoggedIn : state.cartReducer.loggedIn,
  errorMessage : state.cartReducer.ErrorMessage,
})


const mapDispatchToProps = dispatch=>({
  login : (values)=>{dispatch(logIn(values))},
  // jsondata :()=>{dispatch(getDataJson())}
})


Login  =  reduxForm({
    form : 'login',
    validate
})(Login)


export default connect(mapStateToProps,mapDispatchToProps)(Login)
