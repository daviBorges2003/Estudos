import * as types from './types';

export const LoadUser = async(dispatch) => {
    const ApiLoad = fetch('https://jsonplaceholder.typicode.com/users');
    const ApiJSON = (await ApiLoad).json();

    return () => dispatch({type: types.USER_LOGGED , payload: ApiJSON});
} 