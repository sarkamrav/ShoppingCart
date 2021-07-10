export const initial_state ={
    count:0
}

export const count_reducer =(state =initial_state,action)=>{
switch(action.type){
    case 'INCREMENT':
        return {...state, count: state.count + 1}
        
    default:
        return state;
}


}
