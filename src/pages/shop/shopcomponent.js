import React,{useState,Fragment,useEffect} from 'react'
import CollectionPreview from '../../component/CollectionPreview';
import {connect} from 'react-redux';


const Shopcomponent= ({selectedCate,fetchdataaction,collectiondata})=> {
     console.log("colllection",collectiondata);

    /* fetching api data */
    return (
        <div>
            {collectiondata.length>0 &&
            
                selectedCate.length>0 ?   collectiondata.filter (data =>selectedCate.includes(data.title)).
                 map(({id, ...othercollectionprops})=> (
                    <CollectionPreview id = {id} {...othercollectionprops} />
            )):
            collectiondata.map(({id, ...othercollectionprops})=> (
                    <CollectionPreview id = {id} {...othercollectionprops} />
            ))
            
        }
        </div>
    )
}

const mapStateToProps=(state)=>({
    selectedCate: state.cartReducer.currentselectedCategory,
    collectiondata: state.cartReducer.collection

})

export default connect(mapStateToProps,null)(Shopcomponent);