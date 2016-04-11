import React from 'react';
import Grade from './Grade';
const grades = [1,2,3,4,5];

export default class GradeSelector extends React.Component{
  render(){
    const gradeComponents = grades.map((grade, index) => <Grade key={index} grade={grade}/>)
    return(
      <div>
        <div className='grades-header'>elementary</div>
        <ul className='browse-grades'>
          {gradeComponents}
        </ul>
      </div>
    )
  }
}
