import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const initalState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initalState;

        default:
            return state;

    }
}
const CounterbyReducer = () => {
    const [count, dispatch] = useReducer(reducer, initalState);

    return (
        <div>
            <div className='container bg-light my-5 p-5'>
                <h1 className='text-center my-3 container bg-white py-2 m-3 p-3 mb-5'>Number of clicks: {count} </h1>
                <div className='text-center'>
                    <button className='btn btn-primary p-2 mx-5' onClick={() => dispatch('reset')}>Reset</button>
                    <button className='btn btn-primary p-2 mx-5' onClick={() => dispatch('increment')}>Increase</button>
                    <button className='btn btn-primary p-2 mx-5' onClick={() => dispatch('decrement')}>Decrease</button>
                </div>
            </div>
        </div>
    )
}

export default CounterbyReducer;