import './App.css'
import ListaCharacter from './componente/ListaCharacter'
import NavBar from './componente/NavBar'
import { Route, Routes } from 'react-router-dom'
import Actividades from './componente/Actividades'
import {getCountries ,} from '../src/redux/action.js'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CrearActividad from './componente/CrearActividad'
import SearchCountries from './componente/SearchCountries.js'
import Detail from './componente/Detail.js'
import ListaActividades from './componente/ListaActividades.js'

function App() {
const dispatch = useDispatch();
const countries = useSelector((state:any )=> state.allcountries);

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
useEffect(() => {
  dispatch(getCountries());
}, [dispatch]);


  return (
      <div >
        <div className='hoover'>
          <div className='NavBarcontainer'>
          <NavBar  />       
           </div>
           </div>
        <div>
        <Routes>
      <Route path="/" element={<ListaCharacter countries={countries}/>}  />
      <Route path="/actividad" element={<ListaActividades/>}/>
      <Route path="/:id" element={<Detail/>}/>
      <Route path="/CrearActividad" element={<CrearActividad/>} />
      </Routes> 
        </div>
       </div>
          
  )
}

export default App
