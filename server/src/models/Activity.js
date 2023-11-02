const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    ID:{type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
     Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Dificultad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate : {
        min: 1,
        max: 5,
        isEven(value) {
          if(value < 1 || value > 5) {
            throw new Error("La dificultad debe ser entre 1 y 5")
          }
        }
      }
    },    
    Duración: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 1,
        max: 24,
        isEven(value) {
          if(value < 1 || value > 24) {
            throw new Error('La duración debe ser de 1 a 24')
          }
        } 
      }   
    },
    Temporada: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
      },
    } , {
      timestamps: false
    
  });
};