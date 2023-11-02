const { Router } = require("express");
const server = require("../server");
const Country  = require ("../models/Country.js")

router.get("/Activity", (req, res) => {
    const episodes = await Country.findAll();// find all trae todos losdatos de BD
    return episodes;
}
);


const router = Router();

module.exports = router;
