
export const cartitem = (item,currentitem)=>{
const itemExist = item.find(item=>item.id===currentitem.id)

if(itemExist){
  return  item.map(item =>item.id === currentitem.id ? {...item,quantity:item.quantity+1}:item
    )
}
return [...item,{...currentitem,quantity:1}]
}


export const removeItem = (item,currentitem)=>{
  const itemExist = item.find(item=>item.id===currentitem.id)
 if(itemExist.quantity === 1){
   return item.filter(item =>item.id !== currentitem.id)
 }
    return  item.map(item =>item.id === currentitem.id ? {...item,quantity:item.quantity - 1}:item)

}
  

/* for wishlist */

export const addWishlist = (item,currentitem)=>{
  const itemExist = item.find(item=>item.id===currentitem.id)
 if(itemExist){
   return item.filter(item =>item.id !== currentitem.id)
 }

    return  [...item,currentitem]

}

export const getOrderedItem =(item,payload)=>{
  const dateItem = payload.map(data =>{
    return {...data, date:Date.now()}
  })
  console.log("dateItem",dateItem);
  //  return {...item ,dateItem}
 return  item.concat(dateItem)
}



// return currentItem;
// [...state.orderedItems, action.payload, Date.now()]
// }



export const selectedItem = (item,currentitem)=>{
  console.log("item",item);
  console.log("currentitem",currentitem);
  // const itemExist = item.find(item=>item.id===currentitem.id)
  
  // if(itemExist){
    return  item.map((item,index) =>index === currentitem.index ? 
    {...item,isActive:!item.isActive,swapitem:false}:
    {...item,swapitem:false}
      )
  // }
  // // return [...item,{...currentitem,quantity:1}]
  }

  


export const swapedItemSelected = (swapitem,currentitem)=>{
  console.log("swapitemaaaaaaaaaaa",swapitem);
  console.log("currentitemaaaaaaaaaaaaa",currentitem);
  // const itemExist = item.find(item=>item.id===currentitem.id)
  
  // if(itemExist){
    return  swapitem.map((item,index) =>index === currentitem.index ? 
    {...item,isActive:!item.isActive,swapitem:true}:
    {...item,swapitem:true}
      )
  // }
  // // return [...item,{...currentitem,quantity:1}]
  }

export const selectAll = (item)=>{
  return  item.map(item => typeof item.isActive === "boolean" ? {...item,isActive:true}:item)
      
  }
  

  export const swapItem = (item,swapitem)=>{
    console.log("wswapiten",swapitem.filter(item =>item.isActive == true))
     let zz = swapitem.filter(item =>item.isActive == true)
     let ss =zz.map(data =>data.isActive == true ? {...data,isActive:false,swapitem:false}:data)
     let z = swapitem.filter(item =>item.isActive !== true)
    let xx = item.filter(item =>item.isActive !== true);
    let cc=  [...xx,...ss];

  //  swapedItem(cc,z);
   return cc;
   }

   export const swapedItem = (item,swapitem)=>{
    console.log("wswapiten",swapitem.filter(item =>item.isActive !== true))
    console.log("swapitem",swapitem);
    

     
//  console.log("swapitem",item.filter(item =>item.isActive == true));
  let a = item.filter(item =>item.isActive == true)
  if( swapitem && swapitem.length>0){
   let mm =swapitem.filter(data =>data.isActive !== true );
   let kk =mm.map(data =>data.isActive !== true ? {...data,isActive:false,swapitem:false}:data)
   let sssss =a.map(data =>data.isActive == true ? {...data,isActive:false,swapitem:true}:data)
    return [...kk,...sssss]
  }  return a.map(data =>data.isActive == true ? {...data,isActive:false,swapitem:true}:data)
}
 

