import React from "react";
import { useAppDispatch, useAppSelector } from "./../redux/hooks/index.ts";
import { increment, decrement, reset } from "./../redux/slices/counterSlice.ts";

const Counter = () => {

    const count = useAppSelector((state) => state.counter );
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>Counter</h1>

            <div>
                <button onClick={ () => dispatch(increment()) }>Increment</button>
                <p>Value: { count }</p>
                <button onClick={ () => dispatch(decrement()) }>Decrement</button>
                <button onClick={ () => dispatch(reset()) }>Reset</button>
            </div>
        </>
    )
}

export default Counter;
