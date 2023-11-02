const { Country, Activity } = require("../db");



const CountriesfindOne =async (Nombre)=>{
    const busquedaid =await Activity.findOne({
        where: {
            Nombre: Nombre, },
      }
      );
  
    return busquedaid; 
    

}
module.exports = CountriesfindOne