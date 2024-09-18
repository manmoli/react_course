import { useState } from 'react'
import './styles.css'
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