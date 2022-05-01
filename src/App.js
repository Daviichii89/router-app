import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <Router>
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
        <Switch>
          <Route path="/contacto" component={<Contacto />}>
        
          </Route>
          <Route path="/nosotros" component={<Nosotros />}>
            
          </Route>
          <Route path="/" exact component={<Inicio />}>
           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
