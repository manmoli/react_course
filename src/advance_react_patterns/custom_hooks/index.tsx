import { useEffect, useRef, useState } from 'react'
import { usePrevious } from './custom_hook'

export function CustomHookExample() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const prevCount = usePrevious(count)

    const prevText = usePrevious(text)

    return <>

        <LessonCode></LessonCode>

        {/* **************************************************************************************** */}


        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
        <p>Previous render count: {prevCount}</p>

        <input
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
        <p>Previous render text: {prevText}</p>
    </>
}

const LessonCode = () => {
    return <>
        <h1>Custom Hooks</h1>
        <p>Custom hooks are helpers that helps us to avoid generate duplicate logic.
            <br />
            Lets take for example the following component:
            <br />
            <pre>
                <code>
                    {`
    export function CustomHookExample() {
        const [count, setCount] = useState(0)
        const [text, setText] = useState('')
                        
        const prevCount = useRef<number>()
        useEffect(() => {
            prevCount.current = count
        }, [count])
                        
        const prevText = useRef<string>()
        useEffect(() => {
            prevText.current = text
        }, [text])
                        
        return <>
                        
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
            <p>Previous render count: {prevCount.current}</p>
                        
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <p>Previous render text: {prevText.current}</p>
        </>
    }
                `}
                </code>
            </pre>

            We can see that the following code is repeated and it does basically the same:

            <pre>
                <code>
                    {`
    const prevCount = useRef<number>()
    useEffect(() => {
        prevCount.current = count
    }, [count])

    const prevText = useRef<string>()
    useEffect(() => {
        prevText.current = text
    }, [text])
                    `}
                </code>
            </pre>
            <br /><br />
            To avoid repeating the code, we can make use of the custom hooks, to encapsulate the logic into a helper like this:

            <pre>
                <code>
                    {`
    export function usePrevious(value: any) {
        const prevValue = useRef<string>()
        useEffect(() => {
            prevValue.current = value
        }, [value])

        return prevValue.current
    }
                    `}
                </code>
            </pre>
            <br />
            The resulting code would be cleaner, shorter and without repeated code:

            <pre>
                <code>
                    {`
    export function CustomHookExample() {
        const [count, setCount] = useState(0)
        const [text, setText] = useState('')

        const prevCount = usePrevious(count)
        const prevText = usePrevious(text)

        return <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
            <p>Previous render count: {prevCount}</p>

            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <p>Previous render text: {prevText}</p>
        </>
    }
                    `}
                </code>
            </pre>
        </p>
    </>
}