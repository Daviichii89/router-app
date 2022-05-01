import React, {useEffect, useState} from 'react';


const Contacto = () => {

  const [equipo,setEquipo] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    setEquipo(users)
  }
  
  return (
    <div>
        <h1>Contacto</h1>
        <ul>
          {
            equipo.map( item => (
              <li key={item.id}>
                {item.name}-{item.email}
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Contacto;