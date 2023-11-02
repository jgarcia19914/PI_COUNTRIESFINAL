const {Country,Activity}= require ("../db");


const CountriesfindOne =async (name)=>{
    const busquedaid =await Country.findOne({
        where: {
            name: name,
        },
      });
  
    return busquedaid; 
    

}
module.exports = CountriesfindOne