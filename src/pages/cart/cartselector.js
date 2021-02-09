import {createSelector} from 'reselect';

 const selectcart = state=> state.cartReducer;

export const selectcartitems = createSelector(
    [selectcart],
    cart =>cart.cartitems
    );

export const wishList = createSelector(
    [selectcart],
    wishlist =>wishlist.wishlist
    );
    
export const selectcartitemcount = createSelector(
    [selectcartitems],
    cartitem => 
    cartitem.reduce(
            (total,cartquantity)=>
            total+cartquantity.quantity,
            0 )
    );

export const wishlistCount = createSelector(
    [wishList],
    wishlistitem => Object.keys(wishlistitem).length
    );