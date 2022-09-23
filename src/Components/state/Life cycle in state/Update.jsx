import React, { Component } from 'react';
import './bootstrap.css';
import './Css.css';

export class Update extends Component {
    state={
        count: 0,
        nikeb: "Increment"
    }

    increment=()=>{
        this.setState((x)=>{
    return { count: x.count + 1 }
        })
    }

    componentDidUpdate(prevProps, PrevState){
        if(PrevState !==  this.state.count){
    alert("The value of count has been changed");
        }
    }

  render() {
    return (
        <div className='container bg-light my-5 p-5'>
        <h1 className='text-center'>Component Did Update Example</h1>
        <button className='p-2 px-3 btn btn-primary abebe' onClick={this.increment}>{this.state.nikeb}</button>
				<br />
        <div className='container bg-white py-2 m-3 p-3 mb-2 text-center'>
			<h1 className='text-center'>{this.state.count}</h1>
        </div>
      </div>
    )
  }
}

export default Update