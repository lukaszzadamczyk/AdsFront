import React from "react";

import './Header.css';
import {Btn} from "../../common/Btn/Btn";

export const Header = () => (
    <header>
        <h1>
            <strong>Good</strong> Announcements
        </h1>
        <Btn text='Add announcements'/>
        <div className='search'>
            <input type="text"/> <Btn text='Search'/>
        </div>
    </header>
)