import { movies } from "../../movies";
import {NEXT_MOVIE} from "../actions/movieActions";

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
            
        default:
            return state;
    }
}

export default train;