export interface StateStructure {
    searchText:string,
    startLoad:boolean,
    popupList:Array<{
        name:string
    }>
}

export type popupList = StateStructure["popupList"];
