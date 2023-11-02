import React from 'react'
import "../style/Actividadesstyle.css"

function Actividades({Nombre,Dificultad,Duración,Temporada,ID}) {
  return (
    <div className='Activity_container' key={ID}> 
      <h1>Actividad :{Nombre}</h1>
      <h1>Dificultad {Dificultad}</h1>
      <h1>Duracion MN :{Duración}</h1>
      <h1>Temporada :{Temporada}</h1>    
     </div>
  )
}

export default Actividades