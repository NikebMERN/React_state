import React, { Component } from 'react';
// import Mycounte from './Mycounter';
import './bootstrap.css';
import './CSS.css';

class CounterDisplay extends Component {
    constructor(){
    super();
    this.state = {
        desc: "Please rate us",
        add: "Rate-Up",
        minus: "Rate-down",
        ratevalue: "You Give as"
    }
}

    render() {
    return (
      <div className='container bg-light my-5 p-5'>
        <h2 className=' text-center my-3'>{this.state.desc}</h2>
        <button className='p-2 px-3 btn btn-primary moop' onClick={this.props.counterup}>{this.state.add}</button>
        <button className='bg-warning p-2 px-3 btn btn-primary noop' onClick={this.props.counterdown}>{this.state.minus}</button>
        <div className='container bg-white py-2 m-3 p-3 mb-2'>
        <h4 className='text-center'>{this.state.ratevalue} {this.props.count} stars</h4>
        </div>
        <span className='container bg-light my-5'></span>
      </div>
      
    )
  }
}

export default CounterDisplay;