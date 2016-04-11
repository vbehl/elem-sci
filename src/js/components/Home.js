import React from 'react';
import GradeSelector from './GradeSelector';
import BookContainer from './BookContainer';

const books = [
  {
    title: "Fourth Grade Science"

  },
  {
    title: "Fourth and Fifth Grade Science"

  },
  {
    title: "First Grade Science"
  }
];

export default class Home extends React.Component{
  render(){
    return(
      <div>
        <GradeSelector/>
        <BookContainer books={books}/>
     </div>
    )
  }
}
