/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './bootstrap.css';

let x = 0;
let y = 0;

class Mounting extends Component {
    state={
      count: 0,
    }
  componentWillMount(){
    x += 1;  // x=x+1 
    this.setState({ count: "The site is lodaing. . ." })
  }
  componentDidMount(){
    y += 1;  // y=y+1 
    setTimeout(()=>{
      this.setState({ count: "Hello Group-3" })
    }, 8000)
  }
  render() {
    return (
      <div className='container bg-light my-5 p-5'>
        <h1 className='text-center'>Component Will Mount & Component Did Mount Example</h1>
				<br />
				<h1 className='text-center'>{this.state.count}</h1>
        <div className='container bg-white py-2 m-3 p-3 mb-2 text-center'>
				<h1>x = componentWillMount {x} times</h1>
				<h1>y = componentDidMount {y} times</h1>
        </div>
      </div>
    )
  }
}

export default Mounting;