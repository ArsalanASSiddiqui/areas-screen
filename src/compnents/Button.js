import React from "react";
import { useState } from "react";
function Button() {
    const [state, setState] = useState(0);
    function handleClick() {
        setState(state + 1);
        //alert(state);

    }
    return (
        <>
            <div>
                <button onClick={handleClick}>
                    Clicke {state} Time;
                </button>
            </div>
        </>
    )
}
export default Button;