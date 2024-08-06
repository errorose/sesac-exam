import React, {useState} from 'react';

const CounterFunction = ()=>{

    const [number, setNumber] = useState(0);

    const increase = ()=>{
        setNumber(number + 1);
    }

    const decrease = ()=>{
        setNumber(number - 2);
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </>
    )
}

export default CounterFunction;