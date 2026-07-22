import React from "react";
import { useCounter } from "./../context/CounterContext.js";

const Counter = () => {

    const counterState = useCounter();

    return (
        <>
            <h1>Counter</h1>

            <div>
                <button onClick={ () => counterState.incrementHandler() }>Increment</button>
                <p>{ counterState.countValue }</p>
                <button onClick={ () => counterState.decrementHandler() }>Decrement</button>
            </div>
        </>
    );

}

export default Counter;
