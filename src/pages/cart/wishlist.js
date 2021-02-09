import React from 'react'
import {connect}  from 'react-redux';
import {wishList} from './cartselector'

const Wishlist = ({wishlist}) => {
    console.log("wishlist",wishlist) ;  
     return (
        <div>
        {wishlist && wishlist.map((wishlist) =>(
            <div>
            <div>{wishlist.name}</div>
            <img src = {wishlist.imageUrl} />
            <div>{wishlist.price}</div>
            <hr></hr>
            </div>
        ))}
        </div>
    )
}


const mapStateToProps = (state ) =>({
    wishlist: wishList(state)
})

export default connect(mapStateToProps)(Wishlist);