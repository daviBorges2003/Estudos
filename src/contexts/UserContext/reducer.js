/* eslint-disable default-case */
import * as types from './types';

export const reducer = (state , action) => {
    switch(action.type){
        case types.USER_LOGGED:{
            console.log(action.type);
            console.log({...state});
            return {...state , payload: action.payload , login:true}
        }
        case types.USER_LOGGED_OUT:{
            console.log(action.type)
            console.log({...state})
            return {...state, login:false }
        }
    }

    return {...state}
}