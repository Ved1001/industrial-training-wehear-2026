import React, { useState, useMemo } from 'react';

function Usememo(){

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const square = useMemo(() => {

        console.log("Calculating Square");

        return count * count;

    }, [count]);

    return (
        <div>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h2>Count : {count}</h2>
            <h2>Square : {square}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>
    );
}

export default Usememo;