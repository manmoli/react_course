import { lazy, Suspense, useCallback, useState } from "react";

const MyButton = lazy(() => import('./my_button'))


export function LazyLoadingExample() {
    const [logValue, setLogValue] = useState('')
    const [counter, setCounter] = useState(0)

    const onClick = useCallback(() => console.log(logValue), [logValue])

    return <>

        <LessonCode></LessonCode>

        {/* **************************************************************************************** */}

        <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>

        <input type="text" value={logValue} onChange={event => setLogValue(event.target.value)} />

        {logValue.length > 0 ?
            <Suspense fallback={<div>Loading...</div>}>
                <MyButton onClick={onClick}>Log Value</MyButton>
            </Suspense>
            : null
        }
    </>
}


const LessonCode = () => {
    return <>
        <h1>Lazy Loading</h1>
        <p>When component takes too much to load, instead of waiting for them and making the view load too slow, we can load them as we need.<br />
            Lets suppose that we have a button that takes 1 second to load. When we load the page, it would freeze until the button is loaded. That means that we wont use the page until all the components are fully loaded. <br />
            To prevent this to happen, we can use lazy loading in conjunction with Suspense component.
            <br /><br />
            <pre>
                <code>
                    {`
    import { lazy, Suspense, useCallback, useState } from "react";

    const MyButton = lazy(() => import('./my_button'))

    export function LazyLoadingExample() {

        ...

        return <>

            ...

            {logValue.length > 0 ?
                <Suspense fallback={<div>Loading...</div>}>
                    <MyButton onClick={onClick}>Log Value</MyButton>
                </Suspense>
                : null
            }
        </>
    }

                `}
                </code>
            </pre>

            And the child component:
            <pre>
                <code>
                        {`
    const MyButton: React.FC<Props> = ({onClick, children}) => {
        console.log('rendering MyButton component')

        const startDate = new Date()
        while ((new Date().getTime() - startDate.getTime()) < 500) {}

        return <button onClick={onClick}>{children}</button>
    }

                        `}
                </code>
            </pre>

            In this example, all the component will load, but not the button. The button will only load until we type something into the input. 
            Then we can see that the fallback component "Loading..." appears until the component is ready.
        </p>
    </>
}