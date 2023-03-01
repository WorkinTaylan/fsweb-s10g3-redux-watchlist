export const ADD_WATCHLIST = "ADD_WATCHLIST";
export const REMOVE_MOVIE="REMOVE_MOVIE";

export const addList = (movie) => {
    return ({ type: ADD_WATCHLIST, payload: movie });
  }

export const removeMovie=(id)=>{
    return {
        type:REMOVE_MOVIE,
        payload:id
    }
}