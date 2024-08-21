import React from "react";

interface Props {
    onClickHandler: () => void
}

export const ChildWithClickEvent: React.FC<Props> = ({ onClickHandler }) => {
    return <button onClick={onClickHandler}>Click on me, I'm the child</button>
}   