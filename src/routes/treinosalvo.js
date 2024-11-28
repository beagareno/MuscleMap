var express = require("express");
var router = express.Router();

var treinosalvoController = require("../controllers/treinosalvoController");


router.post("/salvar", function (req, res) {
    treinosalvoController.salvar(req, res);
});


module.exports = router;