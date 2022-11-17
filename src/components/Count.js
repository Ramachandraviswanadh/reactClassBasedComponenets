import React, { Component } from 'react'

export class count extends Component {
    constructor(props){
        super(props)
        this.state={count:0,lastname:'qwerty'}
    }
  render() {
    let countstyle ={fontSize:'10em',margin:0}
    const {count,lastname}=this.state
    return (
      <p style={countstyle}>  {count} {lastname}</p>
    )
  }
}

export default count