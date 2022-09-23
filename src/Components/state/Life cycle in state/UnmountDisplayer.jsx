import React, { Component } from 'react';
import './bootstrap.css';
import './Cssmo.css';
import Unmountin from "./Unmount Using log in and out/Unmountin";
import Unmountout from "./Unmount Using log in and out/Unmountout";

export class UnmountDisplayer extends Component {
    constructor(props){
        super(props);
        this.state={
        t: true
        }
    }

    changemodule=()=>{
this.setState({ t: !this.state.t })
    }


  render() {
    return (
      <div className='container bg-light my-5 p-5'>
        <div>{this.state.t ?  <Unmountin /> : <Unmountout />}</div>
       <button className='p-2 px-3 btn btn-primary abebe ' onClick={this.changemodule}>{this.state.t ? "Log Out" : "Log In"}</button>
      </div>
    )
  }
}

export default UnmountDisplayer;