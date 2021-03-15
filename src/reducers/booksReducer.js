import uuid from "react-uuid";

const initState =[               // the stae that will be shared with the other components
    {
      title: "The lord of the rings",
      auther: "J.R.R. Tolkien",
      id: 0,
      isCompleted: false,
    },
    {
      title: "Game of thrones",
      auther: "George R.R. Martin",
      id: 1,
      isCompleted: false,
    }, 
  ] ;

const booksReducer = (state=initState,action) => {
    switch(action.type){
    case 'ADD' :
        return  [...state, { title :action.payload.title, auther :action.payload.auther , id: uuid(), isCompleted: false }] ;
     case 'REMOVE' :
         return state.filter((Book) => Book.id !== action.payload.id) ;
     case 'EDITBOOK' :
         return state.map(book=>(book.id===action.payload.id) ? {title :action.payload.title, auther :action.payload.auther ,id :action.payload.id ,isCompleted: false }:book ) ;
     case 'EDITAUTHER' :
         return state.map(book=>(book.id===action.payload.id) ? {title :action.payload.title, auther :action.payload.auther ,id :action.payload.id ,isCompleted: false }:book ) ;    
     case 'COMPLETED' :
         return state.map(book=>(book.id===action.payload.id) ? {title :action.payload.title, auther :action.payload.auther ,id :action.payload.id ,isCompleted: !action.payload.isCompleted }:book ) ;
         default :
      return state ;
    }
};

export default booksReducer ;