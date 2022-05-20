import React, {FormEvent, useContext, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";

import './Header.css';
import {Btn} from "../../common/Btn/Btn";
import {Link} from "react-router-dom";

export const Header = () => {

    const {search, setSearch } = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();

        setSearch(inputVal);
    }

    return (
    <header>
        <h1>

            <Link className='header-link' to='/' id="style-2" data-replace="Home">
                <span><strong>Good</strong> Announcements</span>
            </Link>
        </h1>
        <Btn to='/add' text='Add announcements'/>
        <form className='search' onSubmit={setSearchFromLocalState}>
            <input value={inputVal} onChange={e => setInputVal(e.target.value)} type="text"/> <Btn text='Search'/>
        </form>
    </header>
    );
};