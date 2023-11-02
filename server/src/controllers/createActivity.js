const {Country, Activity}= require ("../db");


const createActivity = async (Nombre, Dificultad, Duración, Temporada, CountryId) => {
    try {
        // Verifica si el país con el ID proporcionado existe en la base de datos
        const country = await Country.findByPk(CountryId);

        // Si el país no existe, maneja el error según tu lógica de negocio
        if (!country) {
            throw new Error('El país proporcionado no existe en la base de datos');
        }

        // Crea la actividad
        const newActivity = await Activity.create({
            Nombre,
            Dificultad,
            Duración,
            Temporada
        });

        // Asocia la actividad con el país usando el método addActivity (generado automáticamente por Sequelize)
        await country.addActivity(newActivity);

        return newActivity;
    } catch (error) {
        // Puedes manejar el error según tus necesidades, por ejemplo, loguearlo y retornar un mensaje de error específico
        throw new Error(`Error al crear actividad: ${error.message}`);
    }
};

module.exports = createActivity;
/*

const createActivity = async(Nombre, Dificultad, Duración, Temporada)=>{
    const newactivity = await Activity.create({Nombre, Dificultad, Duración, Temporada});
    return newactivity;
};


module.exports = createActivity;*/
