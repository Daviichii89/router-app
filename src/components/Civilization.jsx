import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Civilization = () => {

    const {id} = useParams();

    const [pueblo,setPueblo] = useState([]);

    useEffect(() => {
        const obtenerPueblos = async() => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
            const humans = await data.json();
            setPueblo(humans);
        }
        obtenerPueblos();
    }, [id]);


  return (
    <div>
        <h3>
            {pueblo.name}
        </h3>
        <p>
            {pueblo.team_bonus}
        </p>
    </div>
  )
}

export default Civilization