import React, { Component } from 'react'
import './bootstrap.css'

export class Unmountout extends Component {
  render() {
    return (
      <div className='container bg-light my-5 p-5'>
        <h1 className='text-center'>Component Did Unmount Example</h1>
        <h1 className='text-center'>Please Log-in</h1>
      </div>
    )
  }
}

export default Unmountout