import '../style/ListCharacterStyle.css'
import { useSelector } from 'react-redux';
import {getActividades} from '../redux/action.js'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Actividades from './Actividades';
import SearchActividades from './SearchActividades.js';


function ListaActividades() {
    
 
/*
 useEffect(() => {
   async function fetchData(){
    const response =await fetch('http://localhost:3001/activities')
   const data= await response.json()
   console.log(data)
   setCharacters(data)
   }
   fetchData()
 },[]);*/
 
  const dispatch = useDispatch();
   const actividades = useSelector((state:any) => state.allActivities);

  useEffect(() => {
     dispatch(getActividades());
  }, [dispatch]);

  return (
    <div>
      <div>
        <SearchActividades actividad= {actividades}/>
      </div>
    <div className='Lista_container'>
      
      {actividades.map((actividad) => (
        <Actividades key={actividad.ID}
          Nombre={actividad.Nombre}
          Duración={actividad.Duración}
          Temporada={actividad.Temporada}
          Dificultad={actividad.Dificultad}
        />
      ))}
    </div>
    </div>
  );
}

export default ListaActividades;






 /*
  
 const [characters,setCharacters]=useState([])

  useEffect(() => {
    async function fetchData(){
     const response =await fetch('http://localhost:3001/activities')
    const data= await response.json()
    console.log(data)
    setCharacters(data)
    }
    fetchData()
  },[]);
*/