const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  /*
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Flag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: false, // Esto evitará que se agreguen las columnas "createdAt" y "updatedAt" en la tabla
  });
};*/
sequelize.define('Country', {
  id: {
    type: DataTypes.STRING(3),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      customValidator(value) {
        if (value === null ) {
          throw new Error("name can't be null");
        }
      }
    }
  },
  flags: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  continent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capital: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subregion: {
    type: DataTypes.STRING,
  },
  area:{
    type: DataTypes.INTEGER,
  },
  population: {
    type: DataTypes.INTEGER,
  }
},
{
  timestamps: false,
});
};
