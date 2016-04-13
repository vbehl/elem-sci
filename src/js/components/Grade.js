import React from 'react';

export default class Grade extends React.Component{
  render(){
    const {props: {grade, selected, handleClick}} = this;
    return(
      <a className={`grade ${selected && 'selected'}`} href={grade.url}  onClick={()=>{handleClick(grade.label)}}>{`Grade ${grade.label}`}</a>
    )
  }
}
