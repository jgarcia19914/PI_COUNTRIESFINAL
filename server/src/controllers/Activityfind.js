const {Activity}= require ("../db");

const Activityfind = async ()=>{
    const episodes = await Activity.findAll();// find all trae todos losdatos de BD
    return episodes;
};


module.exports = Activityfind;

