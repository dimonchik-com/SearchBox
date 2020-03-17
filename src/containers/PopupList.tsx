import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../actions";
import Parser from 'html-react-parser';

const PopupList = React.forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const popupList = useSelector((state:any)=>state.popupList);
    const searchText = useSelector((state:any)=>state.searchText);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                dispatch(Actions.updateSearch("", false));
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [dispatch]);

    const clickItem=(name)=>{
        dispatch(Actions.updateSearch(name, false));
    };

    return (
        <div className="Popup-list" ref={ref}>
            {popupList.length?(
                <ul>
                    {
                        popupList.map((elem, index)=>{
                            let findSub=`(${searchText})`;
                            let regex = new RegExp(findSub,"i");
                            return <li key={index}><a href="#0" onClick={(event)=>{
                                clickItem(elem.name)
                            }}>{Parser(elem.name.replace(regex,"<strong>$1</strong>"))}</a></li>;
                        })
                    }
                </ul>
            ):null}
        </div>
    );
});

export default PopupList;
