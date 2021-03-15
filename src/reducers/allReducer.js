import booksReducer from './booksReducer' ;
import {combineReducers} from 'redux' ;

// if we have multi-Reducers we combine them into one by combineReducers & pass it to the store 

const allReducer = combineReducers ({
    booksReducer:booksReducer ,
});

export default allReducer ;