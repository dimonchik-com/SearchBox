import React, {useRef, useEffect} from 'react';
import {useDispatch} from "react-redux";
import logo from '../images/logo.svg';
import '../App.css';
import {PopupList, SearchInput} from '../containers';
import * as Actions from "../actions";

function SearchBox() {
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                dispatch(Actions.setPlanets([]));
            }
        };

        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, [dispatch]);

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="React-dropdown">
                <SearchInput/>
                <PopupList ref={wrapperRef}/>
            </div>
          </header>
        </div>
    );
}

export default SearchBox;
