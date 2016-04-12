import React from 'react';
import Grades from './Grades';
import Grade from './Grade';
import GradeHeader from './GradeHeader';

export default class GradeSelector extends React.Component{
  render(){
    return(
      <div className='grade-selector'>
        <GradeHeader/>
        <Grades/>
      </div>
    )
  }
}
