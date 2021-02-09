import React from 'react'

const ProductDetail =({data})=> {
    const {imageUrl} =data;
    return (
        <div>
            <img src ={imageUrl} />
        </div>
    )
}

export default ProductDetail
