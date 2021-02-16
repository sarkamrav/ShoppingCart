import cartactiontype from './carttype'

export const toggleDropdown = ()=>({
    type:cartactiontype.TOGGLE_CART
})


export const addToCart = (item)=>({
    type:cartactiontype.ADD_CART,
    payload:item
})

export const clearItem = (item)=>({
    type:cartactiontype.CLEAR_ITEM,
    payload:item
})

export const removeItem = (item)=>({
    type:cartactiontype.REMOVE_ITEM,
    payload:item
})

export const productDetail = (item)=>({
    type:cartactiontype.PRODUCT_DETAIL,
    payload:item
})

export const addToWishlist = (item)=>({
    type:cartactiontype.ADD_WISHLIST,
    payload:item
})

export const logIn = (item)=>({
    type:cartactiontype.LOGIN,
    payload:item
})

export const valid = ()=>({
    type:cartactiontype.VALID
})
export const invalid = (data)=>({
    type:cartactiontype.INVALIDC,
    payload:data
})


export const selectSize = (data)=>({
    type:cartactiontype.SELECT_SIZE,
    payload:data
})

export const selectcheckbox = (data)=>({
    type:cartactiontype.CHECKBOX,
    payload:data
})

export const selectsearchbox = (data)=>({
    type:cartactiontype.SEARCH,
    payload:data
})

export const fetchdataload = ()=>({
    type:cartactiontype.FETCH_DATA
})

export const fetchdataaction = (data)=>({
    type:cartactiontype.FETCH_DATA,
    payload:data
})

export const finalCheckout = ()=>({
    type:cartactiontype.FINAL_CHECKOUT,
})

export const porder = (data)=>({
    type:cartactiontype.PORDER,
    payload:data
})
