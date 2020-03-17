import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from './../actions'

function SearchInput() {
    const refInput = useRef();
    const dispatch = useDispatch();
    const searchText = useSelector((state:any)=>state.searchText);
    const startLoad = useSelector((state:any)=>state.startLoad);

    const updateText=(event)=>{
        dispatch(Actions.updateSearch(event.target.value, true));
    };

    const clickClear=()=>{
        dispatch(Actions.updateSearch("", false));
        refInput.current.focus();
    };

    useEffect(() => {
        const handleTab = (event) => {
            if (event.keyCode === 9) {
                if(document.activeElement!==refInput.current) {
                    setTimeout(() => {
                        refInput.current.focus();
                    }, 1);
                }
            }
        };
        window.addEventListener('keydown', handleTab);

        return () => {
            window.removeEventListener('keydown', handleTab);
        };
    }, []);

    return (
        <div className="Search-wrapper">
            <div className="Input-wrapper">
                <input className="Input-control" value={searchText} ref={refInput} onChange={updateText} />
                {startLoad?(
                    <span className="Input-load"></span>
                ):null}
            </div>
            {searchText?(
                <button className="Button-control" onClick={clickClear}>Clear</button>
            ):null}
        </div>
    );
}

export default SearchInput;
