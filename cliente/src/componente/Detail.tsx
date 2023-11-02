import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/countries/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo cargar los datos del país.');
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, [id]);

  if (error) {
    return <div className="Detail">Error: {error}</div>;
  }

  if (!character) {
    return <div className="Detail">Cargando...</div>;
  }

  return (
    <div className="Detail">
      <div className='Character_container'>
      
        <img src={character.flags} alt={character.name} className='Flag' />
        <h1>Nombre: {character.name}</h1>
        <h1>Capital: {character.capital}</h1>
        <h1>Subregion: {character.subregion}</h1>
        <h1>Area : {character.area}m2</h1>
        <h1>Poblacion: {character.population} Habitantes</h1>
       
      </div>
    </div>
  );
}

export default Detail;