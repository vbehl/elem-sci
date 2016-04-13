import React from 'react';
import Grade from './Grade.js';
const GRADES = [{label:1},{label:2},{label:3},{label:4},{label:5}];

export default class Grades extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
  handleClick(index){
    console.log('hi')
    this.setState({selected: index});
  }
  render(){
    const grades = GRADES.map((grade, index)=>
      <Grade key={index} selected={this.state.selected===grade.label} grade={grade} handleClick={(index)=>this.handleClick(index)}/>
    );
    return(
      <ul className="grades">
        {grades}
      </ul>
    )
  }
}
