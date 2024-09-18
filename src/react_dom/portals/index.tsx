import { useState } from "react"
import './styles.css'
import { InnerContainer1 } from "./innerContainer1"
import { InnerContainer2 } from "./innerContainer2"

export const PortalsExample = () => {
    return <>
        <LessonCode></LessonCode>

        <div id="container1">
            <InnerContainer1></InnerContainer1>
            <InnerContainer2></InnerContainer2>
        </div>
    </>
}

const LessonCode = () => {
    return <>
    <h1>Portals</h1>
        <p>With portals we can render elements into a DOM node, outside the parent React tree. <br /><br />
        The good thing about portals is that we can access to the state, react props, events etc... as if it is still in the parent element. This means that the original 
        React tree is not modified. 
        <br />
        To use portals we only need to identify the DOM node where we want to render the element and use the createPortal method like this:
            <pre>
                <code>
                    {`
import { useState } from 'react'
import { createPortal } from 'react-dom'

export const InnerContainer1 = () => {
    const [isHidden, setIsHidden] = useState(true)
    return <div className="innerContainer1">
        Content
        <button onClick={() => setIsHidden(!isHidden)}>{ isHidden? 'Hide' : 'Show'}</button>
        { isHidden && <Modal></Modal>}
    </div>
}

const Modal = () => {
    const container = document.getElementById('container1') as HTMLElement; // Cast to HTMLElement
    return container
        ? createPortal(
            <div className='modal'>
                Modal
            </div>, 
            container
        )
        : null;
}
                    `}
                </code>
            </pre>
        </p>
    </>
}