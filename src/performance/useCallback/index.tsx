import { useCallback, useState } from "react";
import MyButton from "./my_button";


export function UseCallbackExample() {
    const [logValue, setLogValue] = useState('')
    const [counter, setCounter] = useState(0)

    const onClick = useCallback(() => console.log(logValue), [logValue])

    return <>
        
        <LessonCode></LessonCode>

        {/* **************************************************************************************** */}

        <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>

        <input type="text" value={logValue} onChange={event => setLogValue(event.target.value)} />

        <MyButton onClick={onClick}>Log Value</MyButton>
    </>
}


const LessonCode = () => {
    return <>
    <h1>UseCallback</h1>
        <p>I the following example we use useCallback to memoize a function. The reason for this is because when a component is re-rendered, the functions are regenerated again. This can lead to poor performance
            Because imagine that you have a list of components that uses a function as prop. If the list is long, react will regenerate the functions on every render. Another example could be
            that we could be making unnecessary API calls on every render, to avoid that we could use useCallback and only regenerate and execute a function if the elements of the dependency array change.<br/>
            Lets take for example the following component: <br /><br />
            <pre>
                <code>
                    {`
    export function UseCallbackExample() {
    const [logValue, setLogValue] = useState('')

        return <>
            <input type="text" value={logValue} onChange={event => setLogValue(event.target.value)} />

            <MyButton onClick={() => console.log(logValue)}>Log Value</MyButton>
        </>
    }
                    `}
                </code>
            </pre>
            The child component is memoized.
            <pre>
                <code>
                    {`
    interface Props {
        onClick: () => void
        children: React.ReactNode
    }
                        
    const MyButton: React.FC<Props> = ({onClick, children}) => {
        console.log('rendering MyButton component')
        return <button onClick={onClick}>{children}</button>
    }
                        
    export default React.memo(MyButton)
                    `}
                </code>
            </pre>
            <br />

            Every time we change the logValue state variable, the component will re-render. Thus, the child component will re-render, even if the component is memoized <br />
            That is because the function is regenerated on every render, thus, the prop changes because is a different function. <br />
            If we memoize the onClick callback, we can avoid that situation. <br />
            <pre>
                <code>
                    {`
    const onClick = useCallback(() => console.log(logValue), [logValue])
    ...
    <MyButton onClick={() => console.log(logValue)}>Log Value</MyButton>
                    `}
                </code>
            </pre>

            it will only regenerate the onClick function when logValue changes. <br /><br />
            Open the console and see how it works.
        </p>
    </>
}