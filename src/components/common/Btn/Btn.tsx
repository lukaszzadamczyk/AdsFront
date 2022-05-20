import React from "react";
import {Link} from "react-router-dom";

import './Btn.css';

interface Props {
    text: string;
    to?: string;
}

export const Btn = (props: Props) => {
    const {text, to} = props;
    return(
        to
            ? <Link className='btn' to={to}>{text}</Link>
            : <button>{text}</button>
    )
};