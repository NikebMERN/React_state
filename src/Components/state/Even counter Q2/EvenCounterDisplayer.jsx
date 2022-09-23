import React, { Component } from 'react';
import CounterDisplay from './CounterDisplayt';

class EvenCounterDisplayer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      even: 0,
    }
  }

  clicknum = () => {
    this.setState((x) => {
      return { count: x.count + 1, }
    })
  }

  clickseven = () => {
    this.setState((x) => {
      if (this.state.count % 2 === 1) {
        return { even: this.state.count + 1 }
      }
    }
    )
  }


  render() {
    return (
      <div>
        <CounterDisplay clicks={() => { this.clicknum(); this.clickseven() }} count={this.state.even} coun={this.state.count} />
      </div>
    )
  }
}

export default EvenCounterDisplayer;