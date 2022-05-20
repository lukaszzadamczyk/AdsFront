import React, {FormEvent, useContext, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";

import './Header.css';
import {Btn} from "../../common/Btn/Btn";

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
            <strong>Good</strong> Announcements
        </h1>
        <Btn to='/add' text='Add announcements'/>
        <form className='search' onSubmit={setSearchFromLocalState}>
            <input value={inputVal} onChange={e => setInputVal(e.target.value)} type="text"/> <Btn text='Search'/>
        </form>
    </header>
    );
};