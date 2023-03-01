import { useSelector } from "react-redux";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch } from "react-redux";
import { initial, NextMovie, previous } from "./components/actions/movieActions";
import { movies } from "./movies";
import { addList } from "./components/actions/FavAction";

function App() {

  const favMovies = useSelector(state=>state.FavReducer.favorites);
  console.log(favMovies)
  const movieIndex=useSelector(state=>state.movieReducer.movieIndex);
  const movie = movies[movieIndex]
  const dispatch= useDispatch();


  

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={movieIndex} />
          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={()=>{dispatch(initial())}}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başa Dön
            </button>
            <button disabled={movieIndex === 0} onClick={()=>{dispatch(previous())}} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Önceki
            </button>
          </div>

          <div className="flex gap-3 justify-end py-3">
            <button
            disabled={movieIndex===movies.length-1}
              onClick={()=>{dispatch(NextMovie())}}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button onClick={()=>{dispatch(addList(movie))}} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} genres={movie.genres} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
