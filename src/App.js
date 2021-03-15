import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import NavBar from './components/NavBar';
// the parent component that contain all other components

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <BooksForm />
      <BooksList />  
    </div>
  );
} 

export default App;
