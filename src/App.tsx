import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { SearchContext } from './contexts/search.context';
import {Header} from "./components/layout/Header/Header";
import {Map} from "./components/Map/Map";
import { AddForm } from './components/AddForm/AddForm';

export const App = () => {

    const [search, setSearch] = useState('');

  return (
    <BrowserRouter>
        <SearchContext.Provider value={{
            search,
            setSearch
        }}>
            <Header/>
            <Routes>
                <Route path='/' element={<Map/>}/>
                <Route path='/add' element={<AddForm/>}/>
            </Routes>
        </SearchContext.Provider>
    </BrowserRouter>
  );
}
