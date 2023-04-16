import React from 'react'
import Book from './Book.component'
import Row from "react-bootstrap/Row";
const BookList = ({books}) => {
  return (
    <Row className=" ">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </Row>
  );
}

export default BookList