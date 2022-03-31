import React, { useState } from 'react';
import Child from './Child';

const ReactMemo = () => {
    const [toggle, setToggle] = useState(false);
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <Child counter={counter} />

            <button onClick={() => {
                setCounter(counter + 1);
            }}>Counter</button>

            <br />

            <button onClick={() => {
                setToggle(!toggle);
            }}>Toggle</button>
            {toggle && <h1>Toggle</h1>}
        </div>
    )
};

export default ReactMemo;