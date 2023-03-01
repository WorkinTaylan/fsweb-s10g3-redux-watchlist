import { movies } from "../../movies";
import {NEXT_MOVIE, PREVIOUS, INITIAL} from "../actions/movieActions";

const initialState={
    movies:movies,
    movieIndex:0,
}

const train=(state=initialState, action)=>{
    switch (action.type) {
        case NEXT_MOVIE:
            return{
                ...state,
                movieIndex:state.movieIndex+1  
            };
        case PREVIOUS:
            if (state.movieIndex===0){
                return state;
            }
            else {
                return{...state,
                movieIndex:state.movieIndex-1
                
            }
        }
        case INITIAL:
            return{
               movieIndex:0
            }        
        default:
            return state;
    }
}

export default train;