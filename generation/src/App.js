import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoPage, HomePage, UsuarioPage, VeterinariaPage } from "./pages";
import PetpediaPage from "./pages/Petpedia";

import './App.css';

const App = () => {
  return (
    //desde el navegador
    <BrowserRouter>
      {/* Vamos a tener distintas rutas */}
      <Routes>
        {/* Expecificamos cada ruta */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Auto" element={<AutoPage />} />
        <Route path="/Usuario" element={<UsuarioPage />} />
        <Route path="/Petpedia" element={<PetpediaPage />} />
        <Route path="/VeterinariaPage" element={<VeterinariaPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;