var express = require("express");
var router = express.Router();

var treinoController = require("../controllers/treinoController");

//Recebendo os dados do html e direcionando para a função cadastrar de treinoController.js
router.post("/criar", function (req, res) {
    treinoController.criar(req, res);
});


module.exports = router;