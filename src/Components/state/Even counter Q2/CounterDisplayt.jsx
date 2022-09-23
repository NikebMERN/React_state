import React, { Component } from 'react';
import './bootstrap.css';
import './CSSs.css';

class CounterDisplay extends Component {
    constructor(){
    super();
    this.state = {
        desc: "Even number counter",
        even: "Even-Clicks",
        ratevalue: "Your even click",
        ratevalu: "Your even click"
    }
}

    render() {
    return (
      <div className='container bg-light my-5 p-5'>
        <h2 className=' text-center my-3'>{this.state.desc}</h2>
        <button className='p-2 px-3 btn btn-primary mop' onClick={this.props.clicks}>{this.state.even}</button>
        <div className='container bg-white py-2 m-3 p-3 mb-2'>
        <h4 className='text-center'>{this.state.ratevalu} {this.props.coun}</h4>
        <h4 className='text-center'>{this.state.ratevalue} {this.props.count}</h4>
        </div>
        <span className='container bg-light my-5'></span>
      </div>
      
    )
  }
}

export default CounterDisplay;