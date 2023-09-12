import { useContext } from "react";
import { CounterContext } from "./Context";

function Counter() {
    const {state, dispatch} = useContext(CounterContext);

    return (
        <div>
            <h1>Contador: {state.count}</h1>
            <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>
        </div>
    )
}

export default Counter;