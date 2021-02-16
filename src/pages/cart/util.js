
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