const { Router } = require("express");
const server = require("../server");

server.get("/Country", (req, res) => {
 res.send("Hello World")
}
);


const router = Router();

module.exports = router;
