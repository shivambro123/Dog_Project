import React, { createContext, useReducer } from 'react'
const reducer = (state , action) =>{
    switch(action.type){
        case 'changeState':
            return {
                change:action.payload,
            }
        case 'changeFalse':
            return {
                change:action.payload,
                }
        default:
            return state;
    }
}
export const DataHandler = createContext(null);
const ContextApi = ({children}) => {
    const initialstate = {
        change:false,
    }
    const [state,dispatch] = useReducer(reducer,initialstate);
  return (
    <div>
        <DataHandler.Provider value={{state,dispatch}}>
        {children}
        </DataHandler.Provider>
    </div>
  )
}

export default ContextApi