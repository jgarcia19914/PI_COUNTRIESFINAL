import React from 'react'
import "../style/CrearActividadstyle.css"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getCountries } from '../redux/action.js'

function CrearActividad() {
  
const dispatch = useDispatch();
const countries = useSelector((state:any )=> state.allcountries);

 const [Nombre, setname] = React.useState('')  
 const [Dificultad, setDificultad] = React.useState('')
 const [Duración, setDuración] = React.useState('')
 const [Temporada, setTemporada] = React.useState('')
 const [errorResponse, setErrorResponse] = React.useState('');
 const [id, setPais] = React.useState('')



  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(Nombre, Dificultad, Duración, Temporada,id);

    try {
      const response = await fetch("http://localhost:3001/activities",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({Nombre, Dificultad, Duración, Temporada,id}),
      });
      if (response.ok) {
        const json = (await response.json()) 
        console.log(json);
        setDificultad("");
        setDuración("");
        setTemporada("");
        setname("");
        setPais("");
        window.alert('Formulario guardado exitosamente');     
      } else {
        const json = (await response.json())

        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  
  /*
  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }*/

  return (
   
      <form className='form' onSubmit={handleSubmit}>
      <h1>Registro</h1>
      {!!errorResponse && <div className='errorMessage'>{errorResponse}</div>}
      <label>Nombre</label>
      <input type="text" value={Nombre} onChange={e => setname(e.target.value)} />
      <label>Dificultad</label>
      <input type="number" min="1" max="5" value={Dificultad} onChange={e => setDificultad(e.target.value)} />
      <label>Duración</label>
      <input type="number"min="1" max="24" value={Duración} onChange={e =>setDuración(e.target.value)}/>
      <label>Temporada</label>
      <div>
      <select name="temporada" value={Temporada} onChange={e =>setTemporada(e.target.value)}>
                    <option></option>
                    <option>Verano</option>
                    <option>Otoño</option>
                    <option>Invierno</option>
                    <option>Primavera</option>
                </select>
            </div>
      <label>País</label>
      <select value={id} onChange={e => setPais(e.target.value)}>
       <option value="">Selecciona un país</option>
        {countries.map(country => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>

      <button>Registrar</button>
    </form>
  
  )
}


export default CrearActividad