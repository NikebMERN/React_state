import React, { Component } from 'react';
import'./bootstrap.css';

export class Unmount extends Component {
  constructor(props){
    super(props);
    this.state={
    name: "Nikodimos",
    school: "Evangadi",
    group: 3
    }
  }
  
    componentWillUnmount() {
      // alert("You are logging out...");
      window.confirm("Are you sure you want to log out?");
    }


  render() {
    return (
        <div className='container bg-light my-5 p-5'>
        <h1 className='text-center'>Component Did Unmount Example</h1>
				<br />
        <h1 className='text-center'>You give this data</h1>
        <div className='container bg-white py-2 m-3 p-3 mb-2 text-center'>
			<h1 className='text-center'>Name: {this.state.name}</h1>
      <h1 className='text-center'>School: {this.state.school}</h1>
      <h1 className='text-center'>Group: {this.state.group}</h1>
        </div>
      </div>
    )
  }
  }
export default Unmount;