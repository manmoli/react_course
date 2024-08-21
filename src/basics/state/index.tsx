/* 

* useState Hook: useState manages the isOn state, which is a boolean.
* State Update: Clicking the button toggles the state between true and false.

*/


import React, { useState } from "react";

const ComponentWithState: React.FC = () => {
    const [isOn, setIsOn] = useState<boolean>(false)

    return <>
        <h1>This is a component with state</h1>
        <p>The state variable is {isOn ? 'On' : 'Off'}</p>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>
}