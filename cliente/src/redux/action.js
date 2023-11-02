import axios, { Axios } from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_BY_NAME= "GET_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const GET_ACTIVIDAD = "GET_ACTIVIDAD"
export const GET_BY_NAME_ACT= "GET_BY_NAME_ACT"
export const GET_SEARCH_CONTINET="GET_SEARCH_CONTINET"


export function getCountries () {
     return  async function fetchData(dispatch){
        const response =await fetch('http://localhost:3001/countries')
       const data= await response.json()
        return dispatch ({
        type:"GET_COUNTRIES",
        payload:data
       })
      }
}
export function getByName (name) {
      return  async function (dispatch){
         const response =await axios (`http://localhost:3001/countries/?name=${name}`)
         return dispatch ({
         type:"GET_BY_NAME",
         payload:response.data
        })
       }
 }

 export function getBycontinent (continent) {
   return  async function (dispatch){
      const response =await axios (`http://localhost:3001/countries/?continent=${continent}`)
      return dispatch ({
      type:"GET_SEARCH_CONTINET",
      payload:response.data
     })
    }
}

 export function getDetail (id) {
   return function (dispatch) {
      axios.get(`http://localhost:3001/countries/${id}`)
          .then(response => response.data)
          .then(response => {
              dispatch({ type: GET_DETAIL, payload: response })
          })
          .catch(error => console.log(error))
  };
 }

 export function getActividades() {
  return  async function fetchData(dispatch){
    const response =await fetch('http://localhost:3001/activities')
    const data= await response.json()
    return dispatch ({
    type:"GET_ACTIVIDAD",
    payload:data
   })
  }
}
 
 export function getByNameAct (Nombre) {
  return  async function (dispatch){
     const response =await axios (`http://localhost:3001/activities/?Nombre=${Nombre}`)
     return dispatch ({
     type:"GET_BY_NAME_ACT",
     payload:response.data
    })
   }
}
 

