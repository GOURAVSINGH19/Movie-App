import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Trending from "./components/Navbar page/Trending";
import Popular from "./components/Popular/Popular";
import Movies from "./components/Movie/Movies";
import TVshows from "./components/Tv shows/Tvshows";
import People from "./components/People/People";
import PersonDetails from "./components/Details/PersonDetails";
import MovieDetails from "./components/Details/MovieDetails";
import TvDetails from "./components/Details/TvDetails";
import Trailer from "./components/Trailer";
import Notfound from "./components/404";
function App() {
  return (
    <div className=" bg-zinc-800  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies/>} />
        <Route path="/tvshows" element={<TVshows />}/>
        <Route path="/person" element={<People />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer/>} />
        </Route>
        <Route path="/tv/details/:id" element={<TvDetails/>}>
        <Route path="/tv/details/:id/trailer" element={<Trailer/>} />
        </Route>
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
