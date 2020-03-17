import * as Schema from "./../Schema";

export default function counter(state:Schema.StateStructure = {searchText:"", startLoad:false, popupList:[]}, action:any) {
    switch (action.type) {
        case 'UPDATE_SEARCH':
            state={...state, searchText:action.text};
            return state;
        case 'UPDATE_LOAD_ICON':
            state={...state, startLoad:action.status};
            return state;
        case 'SET_PLANETS':
            state={...state, popupList:action.arrayPlanets};
            return state;
        default:
            return state
    }
}
