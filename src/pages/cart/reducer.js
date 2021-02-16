import cartactiontype from './carttype';
import {cartitem, removeItem, addWishlist,getOrderedItem} from './util'
const initial_state ={
    collection:[],
    hidden :false,
    cartitems:[],
    wishlist: [],
    loggedIn:false,
    ErrorMessage:'',
    avaliableSize:['s','m','l','xl','xs','xxl'],
    selectedSize:'',
    selectedCategory:['Hats','Womens','Sneakers','Jackets','Mens'],
    currentselectedCategory:[],
    search:'Brown',
    orderedItems:[],
}

export const cartReducer = (state =initial_state,action) =>{
    switch(action.type){
        case cartactiontype.FETCH_DATA : 
        return{
           ...state ,
           collection:action.payload
        }
        case cartactiontype.INVALIDC : 
        return{
           ...state ,
           loggedIn:false,
           ErrorMessage:action.payload
        }
        case cartactiontype.CHECKBOX : 
        return{
           ...state ,
           currentselectedCategory:action.payload
        }
        case cartactiontype.SELECT_SIZE : 
        return{
           ...state ,
           selectedSize:action.payload
        }
        case cartactiontype.VALID : 
        return{
           ...state ,
           loggedIn:true
        }
        case cartactiontype.TOGGLE_CART : 
            return{
               ...state ,
               hidden:!state.hidden
            }
        
        case cartactiontype.ADD_CART : 
            return{
               ...state ,
               cartitems:cartitem(state.cartitems,action.payload)
            }
              
        case cartactiontype.CLEAR_ITEM : 
            return{
                ...state ,
                cartitems:state.cartitems.filter(cartitem => cartitem.id !== action.payload.id)
            }
        case cartactiontype.REMOVE_ITEM : 
            return{
                ...state ,
                cartitems:removeItem(state.cartitems,action.payload)
            }
        case cartactiontype.ADD_WISHLIST : 
        return{
            ...state ,
            wishlist:addWishlist(state.wishlist, action.payload)
        }

        case cartactiontype.SEARCH : 
        return{
           ...state ,
           search:action.payload
        }

        case cartactiontype.FINAL_CHECKOUT : 
        return{
           ...state ,
           cartitems:[]
        }

        case cartactiontype.PORDER : 
        return{
           ...state ,
           orderedItems:getOrderedItem(state.orderedItems,action.payload),
        //    orderedItems:state.orderedItems.concat(action.payload),

        }
            default:
            return state;
        }
    };

