var express = require("express");
var router = express.Router();

var exerciciotreinoController = require("../controllers/exerciciotreinoController");


router.post("/exercicio", function (req, res) {
    exerciciotreinoController.exercicio(req, res);
});


module.exports = router;