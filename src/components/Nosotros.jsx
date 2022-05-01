import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Nosotros = () => {

  const [civilizacion,setCivilizacion] = useState([]);

  useEffect(() => {
    obtenerCivilizaciones();
  }, []);

  const obtenerCivilizaciones = async() => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const humans = await data.json();
    setCivilizacion(humans.civilizations);
    
  }
  return (
    <div>
        <h1>Nosotros</h1>
        <ul>
          {
            civilizacion.map(item => (
              <li key={item.id}>
                <Link to={`/nosotros/${item.id}`}>
                  {item.name} - {item.expansion}
                </Link>
              </li>
            ))
          }
        </ul>

    </div>
  )
}

export default Nosotros;