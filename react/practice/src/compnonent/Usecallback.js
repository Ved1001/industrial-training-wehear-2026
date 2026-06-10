import React, { useState, useCallback } from 'react';

function Usecallback() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const increment = useCallback(() => {
        console.log("Increment Function Called");
    }, []);

    return (
        <div>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h2>Count : {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>

            <button onClick={increment}>
                Call Function
            </button>

        </div>
    );
}

export default Usecallback;