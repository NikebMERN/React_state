import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

export class Mycounter extends Component {
    constructor(){
        super();
        this.state={
          count: 2,
        }
    }

    increment = () =>{
        this.setState((x)=>{
        return { count: x.count + 1}
        })
    }

    decrement = () =>{
        this.setState((x)=>{
        return { count: x.count - 1}
        })
    }
    

  render() {
    return (
      <div>
        <CounterDisplay counterup={this.increment} counterdown={this.decrement} count={this.state.count}  />
      </div>
    )
  }
}

export default Mycounter;

