/*const Country = require('../models/Activity'); // Reemplaza con la importación real de tu modelo Country
const Activity = require('../models/Activity'); // Reemplaza con la importación real de tu modelo Activity
const sequelize = require('./sequelize'); // Reemplaza con la instancia real de Sequelize

// Suponiendo que tienes las asociaciones definidas correctamente en tus modelos

// Para encontrar todas las relaciones entre Country y Activity a través de la tabla intermedia
const  obtenerRelaciones = async ()=> {
  try {
    const relaciones = await sequelize.models.country_actividades.findAll({
      include: [
        {
          model: Country,
        },
        {
          model: Activity,
        },
      ],
    });
    console.log(relaciones);
    // Aquí puedes manejar los datos como desees, por ejemplo, mostrarlos en la respuesta de una API
  } catch (error) {
    console.error('Error al obtener las relaciones:', error);
  }
}


module.exports = obtenerRelaciones;*/