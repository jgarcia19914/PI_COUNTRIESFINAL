const { Router } = require("express");
const axios = require("axios");
const {Country} = require('../db')

const router = Router();



const getInfoAPI = async ()=>{
  try {
      const API = await axios.get('https://restcountries.com/v3/all');
      const data = await API.data.map((country)=>{
          return {
              id: country.cca3,
              name: country.name.common,
              flags: country.flags[1],
              continent: country.continents[0],
              capital: country.capital !=null ? country.capital[0]:"No data",
              subregion: country.subregion,
              area: country.area,
              population: country.population
          };
      });
      console.log(data.length)
      const DB = await Country.findAll();
      if(!DB.length){
          await Country.bulkCreate(data)
          .then(()=> console.log("Saved"))      
      }
      //const pop = await Countries.findAll();
      //pop.map(p =>console.log(p.toJSON()))
      // const pop = await Countries.findByPk("AGO");
      //return pop;
      return DB;

  } catch (error) {
      console.log(error)
  }}
/*
const URL = "http://localhost:5000/countries";


async function importCountries() {
    try {
      const response = await axios.get(URL);
      const paises = response.data;
      await Country.sync();
  
      // Utiliza la función map para transformar los datos antes de insertarlos en la base de datos
      const paisesAInsertar = paises.map(pais => ({
            
        id: pais.cca3,
        Area: pais.area,
        Imagen_de_la_bandera: pais.flags.png,
        Continente: pais.continents ? pais.continents[0]:null,
        Subregion: pais.subregion ? pais.subregion : null,
        Nombre : pais.name.common,
        Capital: pais.capital ? pais.capital[0] : null,
        Poblacion: pais.population ? parseInt(pais.population, 10) : null,
        // Agrega más campos según los datos de la API
      }));
  
      // Inserta los datos en la base de datos
      await Country.bulkCreate(paisesAInsertar);
  
      console.log('Datos de países importados correctamente a la base de datos.');
    } catch (error) {
      console.error('Error al importar datos:', error);
    } 
  }
  
  importCountries();
*/
getInfoAPI()
module.exports = router;
