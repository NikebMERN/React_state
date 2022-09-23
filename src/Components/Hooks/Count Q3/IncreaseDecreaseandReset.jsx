import React, { useState } from 'react'

const IncreaseDecreaseandReset = () => {
    const [count, setCount] = useState(0);
    // console.log(count);

  return (
    <div>
        <div className='container bg-light my-5 p-5'>
        <h1 className='text-center my-3 container bg-white py-2 m-3 p-3 mb-5'>Number of clicks: {count} </h1>
        <div className='text-center'>
        <button className='btn btn-primary p-2 mx-5' onClick={()=>setCount(0)}>Reset</button>
        <button className='btn btn-primary p-2 mx-5' onClick={()=>setCount((count)=>count + 1)}>Increase</button>
        <button className='btn btn-primary p-2 mx-5' onClick={()=>setCount((count)=>count - 1)}>Decrease</button>
        </div>
        </div>
    </div>
  )
}

export default IncreaseDecreaseandReset