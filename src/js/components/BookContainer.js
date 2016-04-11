import React from 'react';
import Book from './Book';

export default class BookContainer extends React.Component{
  render(){
    const books = this.props.books.map((book, index) => <Book key={index} book={book}/>)
    return (
      <div>
        {books}
      </div>
    )
  }
}
