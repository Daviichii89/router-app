import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Civilization from "./components/Civilization";

function App() {
  return (
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
        </div>
        <hr/>
        <Routes>
          <Route path="/nosotros/:id" element={<Civilization/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/" element={<Inicio/>} />
        </Routes>
      </div>
  );
}

export default App;
