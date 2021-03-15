import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducer from './reducers/allReducer' ;
import {Provider} from 'react-redux';


/* local storage  1-(get data & convert the object to string & store it ) 
                  2- pass it to the store   3-(set new data to localStorage)             */
                  const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')): {} ;                  

// creating the store and passing the reducer & browser local storage & dev tools 

const store = createStore (allReducer , persistedState ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) ;
    

store.subscribe(()=>{localStorage.setItem('reduxState', JSON.stringify(store.getState())) }) ;
                  
                  
//wraping the parent APP component with the store provider and rendering it on our index 

ReactDOM.render(<Provider store={store}> <App /> </Provider> ,  document.getElementById('root'));


reportWebVitals();
