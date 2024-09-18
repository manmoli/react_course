import { useState } from "react"
import { withLogger } from "./hoc"

export function HOCExample() {
    const [name, setName] = useState('')

    interface Props {
        name: string
    }
    
    function helloWorld({name}: Props) {
        return <h1>Hello, {name}!</h1>
    }

    const HelloWorldWithLogs = withLogger(helloWorld)
    return <>

        <LessonCode></LessonCode>

        {/* **************************************************************************************** */}

        
        <input type="text" onChange={ (event) => setName(event.target.value)} />
        <HelloWorldWithLogs name={name}/>

    </>
}



const LessonCode = () => {
    return <>
        <h1>High Order Components</h1>
        <p>HOCs are an advance pattern in React used to reuse components logic. An HOC is a function that takes a component and returns a new component with enhanced or altered behavior.<br />
            Lets suppose that we have a button that takes 1 second to load. When we load the page, it would freeze until the button is loaded. That means that we wont use the page until all the components are fully loaded. <br />
            To prevent this to happen, we can use lazy loading in conjunction with Suspense component. <br /><br />
            The creation of a HOC is quite simple:
            <br />
            <pre>
                <code>
                    {`
export function withLogger<P extends object>(WrappedComponent: React.ComponentType<P>) {

    return function EnhancedComponents(props: P) {
        console.log('props:' + \${props})
        return <WrappedComponent {...props}/>
    }
}

                `}
                </code>
            </pre>

            To use the HOC, you simply wrap the component with the HOC (withLogger) and use it wherever you want. 
            When you change the input, it will log the input's content. Basically the HOC only log the props, but it can be included more complex logic there. <br />
            This is how it is used:

            <pre>
                <code>
                    {`
    const [name, setName] = useState('')

    interface Props {
        name: string
    }
    
    function helloWorld({name}: Props) {
        return <h1>Hello, {name}!</h1>
    }
    
    const HelloWorldWithLogs = withLogger(helloWorld)
    return <>
        <input type="text" onChange={ (event) => setName(event.target.value)} />
        <HelloWorldWithLogs name={name}/>
    </>
                    `}
                </code>
            </pre>
            <br /><br />
            Open the console and see the logs.
        </p>
    </>
}