const {Country,Activity}= require ("../db");


const CountriesfindOne =async (continent)=>{
   try{ const busquedaid =await Country.findAll({
        where: {
            continent: continent,
        },
      });
  
    return busquedaid; 
}
    catch{
        console.error(error);
        throw error;
    }
    

}
module.exports = CountriesfindOne