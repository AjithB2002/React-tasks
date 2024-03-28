import React, { Component } from 'react'



export default class ErrorBoundary extends Component {


  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasError:true};
  }

  render() {
    if(this.state.hasError){
      return <div>
        Error caught and handled
        <div>Displayed Fallback UI</div>
      </div>
    }
  }
}



