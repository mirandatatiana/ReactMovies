import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Button from '@mui/material/Button';
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import Main from 'components/Main';
import "./components/App.css"






const App = () => {



  return (
    <div>

      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/toprated" element={<TopRated />} />

          <Route path="/popular" element={<Popular />} />
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
