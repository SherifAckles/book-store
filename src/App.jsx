import React from 'react'
import NavTop from './components/navbar/Navbar.component'
import BookList from './components/books/BookList.component'
import {books} from './books'
const App = () => {
  return (
    <div className='app'>
      <NavTop />
      <BookList  books= {books} />
    </div>
  );
}

export default App