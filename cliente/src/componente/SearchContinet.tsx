
import "../style/SerachCountriesStyle.css"
import { useDispatch } from "react-redux";
import { useState } from "react";
import {getBycontinent} from '../redux/action.js'



function SearchCotinet() {
  const dispatch = useDispatch();
   const [searchString, setSearchString] = useState('');
  const [error, setError] = useState('');


  
  //*filtro estado
  /* 
  const [filtro, setFilteredlist]= useState(countries) 
  const [searchString, setSearchString]= useState("")
  
  function handleChange (e){
  e.preventDefault()
  setSearchString(e.target.value); 
   } 
  
   function  handleSubmit (e){
  e.preventDefault()
  const filtered =  countries.filter((ciudad) =>
  ciudad.Nombre.includes(searchString));
  setFilteredlist(filtered)
  }*/


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
    dispatch(getBycontinent(searchString));
    setSearchString(''); // Limpiar el campo de búsqueda después de realizar la búsqueda
  }
}


  return (
    <div  id="searchContainer">
    <form className="Search_contriner"  onChange={handleChange}  >
    <input type="search"  placeholder='Buscar' />
        <datalist >
        {continete.map((suggestion) => (
          <option key={suggestion.id} value={suggestion.continent} />
        ))}
    </datalist>
    <button type='submit' onClick={handleSubmit} className='Search_button'>Buscar Pais</button>
     </form>
    </div>
  )
}

export default SearchCotinet