import React from 'react'
import "../style/Characterstyle.css"
import { Link } from 'react-router-dom'




function Character({nombre,flags,id}) {
  return (
    <div className='Character_container'> 
    <Link rel="stylesheet" to={`/${id}`}>
     <img src={flags} alt={nombre} className='Flag'/>        
      <h1>{nombre}</h1>
    </Link>
  </div>
  )
}

export default Character