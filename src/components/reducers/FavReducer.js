import { REMOVE_MOVIE } from "../actions/FavAction"
import { ADD_WATCHLIST } from "../actions/movieActions"

const initialState = {
    favorites:[],
  }

const train2=(state=initialState, action)=>{
    switch(action.type){
        case ADD_WATCHLIST:
                let watchList={
                    id:action.payload.id,
                    title:action.payload.title,
                    genres:action.payload.genres.join(' , ')
                }
                if (state.favorites.some((movie) => movie.id === watchList.id)) {
                    return state
                }
                return {
                    ...state,
                    favorites: [...state.favorites, watchList]
                }
        case REMOVE_MOVIE:
            return {
                ...state,
                favorites:state.favorites.filter(movie=>movie.id !== action.payload)
            }        
                default:
                    return state;
    }
}

export default train2;