import React, { Component } from 'react'

export default class Errormain extends Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
    };
  }
handleClick(){
  this.setState(({counter}) => ({
    counter: counter+1
  }));
}

  render(){
    if(this.state.counter ===10){
      throw new Error ('Manual Error')
    }
    return( 
  <>
    <div className='text-center'>
      Counter: {this.state.counter }
      <button className='btn btn-success' onClick={this.handleClick.bind(this)}> Increment</button>
    </div>
    <hr />
  </>
    );
  }
}