const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const Activityfind = require("../src/controllers/Activityfind")
const createActivity = require("../src/controllers/createActivity")
const Countriesfind = require("../src/controllers/Countriesfind")
const CountriesFindBypk = require("../src/controllers/CountriesFindBypk")
const CountriesfindOne = require("../src/controllers/ContriesfindOne")
const ActivityfindOne = require("../src/controllers/ActivitiFindOne")
const CountryContinent = require ("../src/controllers/CountryContinent")
const obtenerRelaciones = require("../src/controllers/Findtoun")

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);



/*
router.get("/activities", async(req, res) => {
 try {
    const actividades = await Activityfind();
    res.status(200).json(actividades)
 } catch (error) {
    res.status(500).json ({error:error.message});
}
});  */

router.get("/activities", async(req, res) => {
   const {Nombre}= req.query;
   try {
       const filtronombre = Nombre ? await ActivityfindOne(Nombre) : await Activityfind();
        res.status(200).json(filtronombre)
    } catch (error) {
       res.status(500).json ({error:error.message});
   }
  });

router.post("/activities", async(req, res) => {
    try {
        const {id, Nombre, Dificultad, Duración, Temporada}= req.body
        const newactivity = await createActivity(Nombre, Dificultad, Duración, Temporada,id)
        res.status(200).json(newactivity)
        } catch (error) {
            res.status(500).json ({error:error.message}); 
        }
   });  

   router.get("/countries", async(req, res) => {
    const {name}= req.query;
    try {
        const filtronombre = name ? await CountriesfindOne(name) : await Countriesfind();
         res.status(200).json(filtronombre)
     } catch (error) {
        res.status(500).json ({error:error.message});
    }
   });

   router.get("/countries", async(req, res) => {
      const {continent}= req.query;
      try {
          const filtronombre = continent ? await CountryContinent(continent) : await Countriesfind();
           res.status(200).json(filtronombre)
       } catch (error) {
          res.status(500).json ({error:error.message});
      }
     });
  

   router.get("/countries/:id", async(req, res) => {
    const {id}= req.params;
    try {
       const filtroid = await CountriesFindBypk(id);
       res.status(200).json(filtroid)
    } catch (error) {
       res.status(500).json ({error:error.message});
   }
   });

   router.get("/countries/Nombre", async(req, res) => {
      try {
       const filtronombre = await obtenerRelaciones ();
       res.status(200).json(filtronombre)
    } catch (error) {
       res.status(500).json ({error:error.message});
   }
});



module.exports = server;
