import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const initalState = 0;
const reducerc = (state, action) => {
    switch (action) {
        case 'add':
            return state + 1;

        default:
            return state;
    }
}


const EvenCounterbyReducer = () => {
const [count, dispatchc] = useReducer(reducerc, initalState);
const [even, dispatche] = useReducer(reducere, initalState);

function reducere (state, action) {
    state = count;
    if (state % 2 === 0) {
        switch (action) {
            case 'even':
                return  state;

            default:
                return state;
        }
    }
}

    return (
        <div className='container bg-light my-5 p-5 text-center'>
        <h2 className=' text-center my-3'>Counter and Even Counter</h2>
        <button className='p-2 px-3 btn btn-primary d-flex mx-auto m' onClick={()=>{dispatchc('add'); dispatche('even');}}>Click Here</button>
        <div className='container bg-white py-2 m-3 p-3 mb-2'>
        <h4 className='text-center'>Number of clicks: {count}</h4>
        <h4 className='text-center'>Number of even clicks: {even}</h4>
        </div>
        <span className='container bg-light my-5'></span>
    </div>
    )
}

export default EvenCounterbyReducer