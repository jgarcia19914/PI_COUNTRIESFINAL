import React from 'react'
import Character from './Character'
import '../style/ListCharacterStyle.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useEffect ,useState  } from 'react';
import {getCountries ,} from '../redux/action.js'
import SearchCountries from './SearchCountries.js';
import SearchActividades from './SearchActividades.js';
import SearchCotinet from './SearchContinet.js';


function ListaCharacter() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allcountries);

  // Estado local para controlar la página actual y la cantidad de países por página
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);

  // Calcular el índice del último país en la página actual
  const indexOfLastCountry = currentPage * countriesPerPage;
  // Calcular el índice del primer país en la página actual
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // Obtener los países de la página actual
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // Cambiar a la siguiente página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  return (
    <div className='contenedorprincipal'>
      <div className='SearchCountries'>
      <SearchCountries countries={countries}/>
      </div>
      <div className='Lista_container'>
        {currentCountries.map((character) => {
          return (
            <Character
              key={character.id}
              nombre={character.name}
              flags={character.flags}
              id={character.id}
              continente={character.continent}
              poblacion={character.population}
              subregion={character.subregion}
            />
          );
        })}
      </div>

      {/* Paginación */}
      <div className='pagination'>
        {Array.from({ length: Math.ceil(countries.length / countriesPerPage) }, (_, index) => index + 1).map((pageNumber) => (
          <button key={pageNumber} onClick={() => paginate(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListaCharacter;