import { call, put, takeLatest, all } from 'redux-saga/effects';
import toggleDropdown from './cartaction'
import cartactiontype from './carttype';
import fetchData from '../fetchdata';
import {valid,invalid,fetchdataaction} from '../cart/cartaction';

/*Genereator funvtion */

function* loggedIn(action) {
  try{
    let loggedIn = false;
    console.log("payloadsaga",action.payload);
    // const data = yield call(fetchData);
    const data = yield call(fetchData, { method: 'get', url: '/json/passwords.json' })
    //  yield put(logIn(data))
    let userdata = action.payload;
    data.data.map((item)=>{
      debugger;
      if(item.username ===userdata.email && item.password === userdata.password){
        loggedIn = true;
        localStorage.setItem('loggedIn',loggedIn);
      }
    })
  if(!loggedIn){
    yield put(invalid('Please Enter Valid Credential'))
  }
  if(loggedIn){
    yield put(valid())
    try{
      const user = yield call(fetchData, { method: 'get', url: `http://localhost:3000/json/shopdata.json` })
       console.log("apidata",user);
        yield put(fetchdataaction(user.data));
        } catch(e){
            console.log(e);
        }
  }
  
  } catch(e){
    console.log(e);
  }
 
}


function* actionWatcher(){
  yield takeLatest('LOGIN',loggedIn)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}

