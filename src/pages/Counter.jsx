import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <>
            <div className='container'>
                <p className='h3 text-center'>Count: {count}</p>


            </div>
            <div className="d-flex justify-content-center text-center">
                <button className='btn btn-primary' onClick={incrementCount}>Increment</button>
                <button className='btn btn-primary' onClick={decrementCount}>Decrement</button>

            </div>
            <hr />
        </>

    );
}

export default Counter;