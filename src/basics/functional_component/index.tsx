/* 

* useState Hook: useState is a React hook used to manage state in functional components. Here, count is the state variable and setCount is the function to update it.
* TypeScript: The state type is explicitly defined as number.

*/

import React, { useState } from "react"

interface Props {
    name: string
}

export const FunctionalComponent: React.FC<Props> = ({ name }) => {
    const [count, setCount] = useState<number>(0)

    return <>
        <p>I'm a functional component</p>
        <p>click the button to increase the counter</p>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
}