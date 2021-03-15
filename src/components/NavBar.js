
import {useSelector } from 'react-redux' ;



const NavBar = () => {

  const  Books  = useSelector(state => state.booksReducer);        //get the state  

  return (           //show a welcome message & return the number of books inside the state  
    <nav>
      <h1>Welcome to your books reading list</h1>
      <h4>You have <span>{Books.length}</span> Books on your reading list</h4>
      <hr></hr>
    </nav>
  );
};

export default NavBar;