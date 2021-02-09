import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { cartReducer } from '../pages/cart/reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig ={
    key:'root',
    storage,
}
const rootReducer = combineReducers({
form:formReducer,
cartReducer:cartReducer
});

export default persistReducer(persistConfig,rootReducer)