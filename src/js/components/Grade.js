import React from 'react';

export default class Grade extends React.Component{
  render(){
    return(
      <li className="grade-list-item">
        {`Grade ${this.props.grade}`}
      </li>
    )
  }
}
