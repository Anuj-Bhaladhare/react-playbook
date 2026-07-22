import { CounterProvider } from "./../context/CounterContext.js";

export const AppProvider = ({children}) => {
    return (
        <CounterProvider>
            {children}
        </CounterProvider>
    )
}
