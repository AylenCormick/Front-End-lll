import { useContext } from "react";
import { CounterContext } from "./Context";

function Display() {
    const {state} = useContext(CounterContext);

    return (
        <div>
            <h2>Valor del contador: {state.count}</h2>
        </div>
    )
}

export default Display;