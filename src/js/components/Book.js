import React from 'react';

export default class Book extends React.Component{
  render(){
    return(
      <div className="book">
        {this.props.book.title}
      </div>
    )
  }
}
