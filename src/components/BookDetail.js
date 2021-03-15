import React, { Fragment, useState, useRef } from "react";
import { useDispatch } from 'react-redux' ;
import {removeBooks , editBooks , editAuther ,completedBook} from '../actions/booksAction' ;

const BookDetail = ({ Book }) => {           //recieve the props & destruction
  
    const dispatch = useDispatch() ;
 
  const inputRef = useRef();                     // referance of clicked input (to store the updated value)
  const inputRef2 = useRef();                    // referance of clicked input (to store the updated value)
 
  const [switcher, setswitcher] = useState(1);    //state to switch between data & updating forms

  const showForm = () => {             //showing the data of each book in the list

    return ( <li>
        <div className="title" style={{ textDecoration: Book.isCompleted ? "line-through" : "" }}
          onClick={() => setswitcher(2)}  > {Book.title} </div>

        <div className="auther" style={{ textDecoration: Book.isCompleted ? "line-through" : "" }}
          onClick={() => setswitcher(3)} > {Book.auther}  </div>

        <button className="f" onClick={() => dispatch( completedBook(Book.id,Book.title,Book.auther,Book.isCompleted )) }>
                Finished / Unfinished  </button>  

        <button className="r" onClick={() => dispatch( removeBooks(Book.id))}>Remove</button>
      </li>   );   };


  const editBookForm = () => {        // edit book input after clicking on it using (handleSubmitBook)
    return (
      <form className="editForm" onSubmit={handleSubmitBook}>
        <input type="text" defaultValue={Book.title} ref={inputRef} required />
        <div className="auther">{Book.auther}</div>
      </form>  );  };


  const handleSubmitBook = (e) => {       // function to submit the new book title
    e.preventDefault();
    dispatch(editBooks(Book.id, inputRef.current.value , Book.auther)) ;
    setswitcher(1);   };


  const editAutherForm = () => {         // edit auther input after clicking on it using (handleSubmitAuther)
    return (
      <form className="editForm" onSubmit={handleSubmitAuther}>
        <div className="title">{Book.title}</div>
        <input type="auther" defaultValue={Book.auther} ref={inputRef2} required />
      </form>  );   };


  const handleSubmitAuther = (e) => {    // function to submit the new book title
    e.preventDefault();
    dispatch (editAuther(Book.id,inputRef2.current.value , Book.title));
    setswitcher(1);   }; 


  const toggler = () => {        // function to switch between showing data & showing updating forms
    if (switcher === 1) {
      return showForm();
    } else if (switcher === 2) {
      return editBookForm();
    } else {
      return editAutherForm();
    }   };


  return <Fragment>{toggler()} </Fragment>;   // [BookDetail component] will return toggler()
};

export default BookDetail;
