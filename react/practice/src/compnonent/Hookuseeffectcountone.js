import React, { useState, useEffect } from 'react';

function Hookuseeffectcountone() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("count changed");
        document.title = `clicked ${count}`;
    }, [count]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={() => setCount(count + 1)}>
                click {count}
            </button>
        </div>
    );
}

export default Hookuseeffectcountone;