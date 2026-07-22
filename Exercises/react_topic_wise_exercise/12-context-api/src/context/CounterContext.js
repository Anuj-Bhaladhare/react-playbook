import React, { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({children}) => {

    const [countValue, setCountValue] = useState(0);

    const incrementHandler = () => {
        setCountValue(prev => prev + 1);
    }

    const decrementHandler = () => {
        setCountValue(prev => prev - 1);
    }

    return (
        <CounterContext.Provider
            value={{
                countValue,
                setCountValue,
                incrementHandler,
                decrementHandler
            }}
        >
            {children}
        </CounterContext.Provider>
    );

}

export const useCounter = () => {
    return useContext(CounterContext);
}
