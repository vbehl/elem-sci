import React from 'react';

export default class Grade extends React.Component{
  render(){
    const {props: {grade:grade}} = this;
    return(
      <a className='grade' href={grade.url}>{`Grade ${grade.label}`}</a>
    )
  }
}
