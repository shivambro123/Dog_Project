import React, { createContext, useReducer} from 'react'

const reducer = (state, action)=>{
    switch(action.type){
        case 'offCanvasHandlervalue':
            return {
                statevalue:true,
            }
        default:
            return state;
    }
}
export const DataContext = createContext(null)
const ContextComp = ({children}) => {
    const initialState = {
        statevalue:false,
    }

    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <DataContext.Provider value={{state,dispatch}}>
         {children}
        </DataContext.Provider>
     
    </div>
  )
}

export default ContextComp