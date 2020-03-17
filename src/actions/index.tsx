import * as Schema from "../Schema";

export const setPlanets = (arrayPlanets:Schema.popupList) => ({
    type: 'SET_PLANETS',
    arrayPlanets:arrayPlanets
});

export const updateSearch = (text:string, isMakeAjax:boolean) => ({
    type: 'UPDATE_SEARCH',
    text: text,
    isMakeAjax:isMakeAjax
});

export const updateLoad = (status:boolean) => ({
    type: 'UPDATE_LOAD_ICON',
    status: status
});
