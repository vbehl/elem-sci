import React from 'react';
import Grade from './Grade.js';
const GRADES = [{label:1},{label:2},{label:3},{label:4},{label:5}];

export default class Grades extends React.Component{
  render(){
    const grades = GRADES.map((grade, index)=><Grade grade={grade}/>);
    return(
      <ul className="grades">
        {grades}
      </ul>
    )
  }
}
