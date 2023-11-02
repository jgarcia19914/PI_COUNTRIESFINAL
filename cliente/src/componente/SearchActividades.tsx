import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getActividades ,getByNameAct} from '../redux/action.js'
import "../style/SearchActividadesstyle.css"


function SearchActividades ({actividad}) {
  const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const [error, setError] = useState('');




  function handleChange(e) {
    setSearchString(e.target.value);
    console.log(e.target.value)
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchString.trim() === '') {
      setError('El campo de búsqueda no puede estar vacío');
    } else {
      dispatch(getByNameAct(searchString));
      setSearchString(''); // Limpiar el campo después de realizar la búsqueda
    }
  }

 

    return (
      <div className='Search_actividades'>
          <div>
          <form className="Search_contriner" onChange={handleChange} >
          <input className='Actividad' type="search"  placeholder='Buscar Actividad' list="suggestions"/>
              <datalist id="suggestions">
              {actividad.map((suggestion) => (
                <option key={suggestion.ID} value={suggestion.Nombre} />
              ))}
          </datalist>
          <button type='submit' onClick={handleSubmit} className='Search_button'>Buscar Atividad</button>
          <button type='submit'  className='Search_button'>Regresar</button>
          </form>
          </div>
        
      </div>
    )
  }
  
  export default SearchActividades