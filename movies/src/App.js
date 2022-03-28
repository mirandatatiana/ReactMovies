import NavBar from "./components/NavBar"
import { useState } from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Typography from '@mui/material/Typography';


const url = "https://api.themoviedb.org/3/movie/550?api_key=41514cf9c5004dbe47144dbf1928e39c"
const App = () => {
  const [value, setValue] = useState(2);
  const [colorDelBoton, setColorDelBoton] = useState('primary');

  const handleClick = () => {
    setColorDelBoton('error');
  };


  return (
    <div>

      <NavBar />


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Popular />} />
        </Routes>
        <Routes>
          <Route path="/" element={<TopRated />} />
        </Routes>

      </BrowserRouter>
      {/* boton que me traigo de material */}
      <Button
        variant="contained"
        onClick={handleClick}
        color={colorDelBoton}
        size="small"
        loading
      >
        Text
      </Button>
    </div>
  );
};

export default App;
