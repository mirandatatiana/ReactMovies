
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import Main from 'components/Main';
import "./components/App.css"
import DetailsCard from 'components/DetailsCard';
import SearchMovies from 'components/SearchMovies';





const App = () => {



  return (
    <div>


      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search-redic/:movie" element={<SearchMovies />} />

          <Route path="/:idMovie" element={<DetailsCard />} />

        </Routes>

      </BrowserRouter>
      {/* boton que me traigo de material */}
      {/* <Button
        variant="contained"
        onClick={handleClick}
        color={colorDelBoton}
        size="small"
        loading
      >
        Text
      </Button> */}
    </div>
  );
};

export default App;
