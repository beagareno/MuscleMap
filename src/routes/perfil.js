var express = require("express");
var router = express.Router();
var perfilController = require("../controllers/resultadoController");

router.post("/totalCalTreino", (req, res) => {
    perfilController.postPerfil(req, res)
});

router.get("/ultimos", (req, res) => {
    perfilController.obterPerfil(req, res);
});

module.exports = router;