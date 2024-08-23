import React from "react";

interface Props {
    onClick: () => void
    children: React.ReactNode
}

const MyButton: React.FC<Props> = ({onClick, children}) => {
    console.log('rendering MyButton component')

    const startDate = new Date()
    while ((new Date().getTime() - startDate.getTime()) < 500) {}

    return <button onClick={onClick}>{children}</button>
}

export default React.memo(MyButton)