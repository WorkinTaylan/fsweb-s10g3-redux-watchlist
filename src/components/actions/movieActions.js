export const NEXT_MOVIE="NEXT_MOVIE";
export const ADD_WATCHLIST="ADD_WATCHLIST";

export const NextMovie=(num)=>{
    return ({type:NEXT_MOVIE})
}

export const AddWatchList=(list)=>{
    return ({type:ADD_WATCHLIST, payload: list})
}