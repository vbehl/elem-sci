import React from 'react';

export default class Book extends React.Component{
  render(){
    var {props: {book: book}} = this;
    return(
      <div className="book">
      <img src={book.imageUrl}/>
        {book.title}
      </div>
    )
  }
}
