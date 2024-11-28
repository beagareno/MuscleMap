var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");


router.post("/grafico", function (req, res) {
    dashController.grafico(req, res);
});


module.exports = router;