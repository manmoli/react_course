import { useMemo, useState } from "react";
import MyButton from "./my_button";


export function MemoExample() {
    const [logValue, setLogValue] = useState('')
    const [counter, setCounter] = useState(0)

    return <>
        <h1>Memo</h1>
        <p>Everytime we change the state of a component, the component is re-rendered. If this happens, the child components will be re-rendered too.
            to avoid this, we should memoize the child components. <br />
            Having the child component like:
            <pre>
                <code>Child component: <br />
                    {`
    export default function ChildComponent ({propValue, children}: Props) {
        console.log('rendering my button')
        return <h1>This is the prop from the parent: {propValue}</h1>
    }
                    `}
                </code>
            </pre>
            And the parent component like:
            <pre>
                <code>Parent component: <br />
                    {`
    <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
    <p>Counter: {counter}</p>
    <input type="text" value={logValue} onChange={event => setLogValue(event.target.value)} />
    <MyButton propValue={logValue}>Log Value</MyButton>
                    `}
                </code>
            </pre>
            Every time we click on the button, as the button updates the state variable of the parent, it will re-render, therefore, the child will re-render too. <br /><br />
            To prevent that, it could be use 'memo' to memoize the component and prevent the re-rendering when the props don't change. <br /><br />
            This is how we memoize a component.
            <pre>
                <code>
                    {`
    export default React.memo(function ChildComponent ({propValue}: Props) {
        console.log('rendering my button')
        return <h1>This is the prop from the parent: {propValue}</h1>
    })
                    `}
                </code>
            </pre>
            This way, we prevent to re-render the child process if is not necessary.
            <br /><br />
            Open the console to see how this works.
        </p>

        <div style={{ border: '1px solid', padding: '10px', margin: '10px'}}>

            <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
            <p>Counter: {counter}</p>
            <input type="text" value={logValue} onChange={event => setLogValue(event.target.value)} />

            <MyButton propValue={logValue}></MyButton>
        </div>
    </>
}
