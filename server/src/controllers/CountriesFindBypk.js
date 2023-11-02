const {Country,Activity}= require ("../db");


const CountriesFindBypk =async (id)=>{
    const busquedaid =await Country.findByPk(id)
    return busquedaid; 
    

}
module.exports = CountriesFindBypk