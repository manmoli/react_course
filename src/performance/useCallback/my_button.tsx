import React from "react";

interface Props {
    onClick: () => void
    children: React.ReactNode
}

const MyButton: React.FC<Props> = ({onClick, children}) => {
    console.log('rendering MyButton component')
    return <button onClick={onClick}>{children}</button>
}

export default React.memo(MyButton)