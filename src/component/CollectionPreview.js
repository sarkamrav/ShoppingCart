import React from 'react'
import CollectionItem from './CollectionItem'
import styled from 'styled-components';
import {connect} from 'react-redux';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  
    .title {
      font-size: 28px;
      margin-bottom: 25px;
    }
  h1{
    margin-left:20px;
  }
    .preview {
      display: grid;
      padding:20px;
      justify-content: space-between;
      grid-gap:2%;
      grid-template-columns:repeat(auto-fill,minmax(21%,1fr));
    }
  `;
 const CollectionPreview = ({title, items, selctedItem,selectedCate,searchstring}) => {
    return (
        <Wrapper>
            <h1 className='title'>{title}</h1>
            <div className ='preview'>
            {selectedCate.length>0 ?
                 selctedItem.length>0 && selctedItem !== 'select' ? 
                 items.filter(item=>item.size.includes(selctedItem)).
                 filter((item)=>item.name.toString().toLowerCase().includes(searchstring.toString().toLowerCase())).
                  map((item)=>(
                <CollectionItem key ={item.id} item ={item}/>
               )):
               items.
               filter((item)=>item.name.toString().toLowerCase().includes(searchstring.toString().toLowerCase()))
               .map((item)=>(
              <CollectionItem key ={item.id} item ={item}/>
             )) 
            :
            selctedItem.length>0 && selctedItem !== 'select' ? 
            items.filter(item=>item.size.includes(selctedItem)).
            filter((item)=>item.name.toString().toLowerCase().includes(searchstring.toString().toLowerCase()))
            .map((item)=>(
           <CollectionItem key ={item.id} item ={item}/>
          )):
          items.
          filter((item)=>item.name.toString().toLowerCase().includes(searchstring.toString().toLowerCase())).
          map((item)=>(
         <CollectionItem key ={item.id} item ={item}/>
        )) 
             }
            
            </div>
        </Wrapper>
    )
}

const mapStateToProps =(state)=>({
  selctedItem:state.cartReducer.selectedSize,
  selectedCate: state.cartReducer.currentselectedCategory,
  searchstring:state.cartReducer.search,
})


export default connect(mapStateToProps,null)(CollectionPreview)