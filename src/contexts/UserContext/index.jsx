import React, { useReducer } from 'react'
import { reducer } from './reducer';
import {data} from './data'
import { UserContext } from './context';

const ContextProvider = ({children}) => {

   const [usersState , usersDispatch] = useReducer(reducer , data);

  return (
    <UserContext.Provider value={{usersState , usersDispatch}}>
        {children}   
    </UserContext.Provider>
  )
}

export default ContextProvider