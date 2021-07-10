import React,{useReducer} from 'react';

//DATA LAYER
export const AppProvider = React.createContext();


export const ShareContext = ({reducer,initialstate,children})=>{

    const [state,dispatch] =  useReducer(reducer,initialstate);
return(
    <AppProvider.Provider value ={{state,dispatch}} >
        {children}
    </AppProvider.Provider>
)

}