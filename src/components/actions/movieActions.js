export const NEXT_MOVIE="NEXT_MOVIE";
export const ADD_WATCHLIST="ADD_WATCHLIST";
export const PREVIOUS="PREVIOUS";
export const INITIAL='INITIAL';

export const NextMovie=()=>{
    return ({type:NEXT_MOVIE})
}

export const previous=()=>{
    return ({type:PREVIOUS})
}

export const initial=()=>{
    return({type:INITIAL})
}

export const AddWatchList=(list)=>{
    return ({type:ADD_WATCHLIST, payload: list})
}