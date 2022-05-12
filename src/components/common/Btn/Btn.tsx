import React from "react";

import './Btn.css';

interface Props {
    text: string;
}

export const Btn = (props: Props) => {
    const {text} = props;
    return(
        <button>{text}</button>
    )
};