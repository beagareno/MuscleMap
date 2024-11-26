var perfilModel = require("../models/perfilModel");
function postperfil(req, res) {
    console.log("Corpo da requisição:", req.body); 

    const idPlayer = req.body.idPlayer;
    const perfil = req.body.perfil;

    perfilModel.postperfil(idPlayer, perfil)
    .then(response => {
        return res.status(201).json(response);
    })
    .catch(e => {
        console.error(e); 
        res.status(500).send("Erro ao processar a requisição.");
    });
}
var perfilModel = require("../models/perfilModel");

function obterperfil(req, res) {
    perfilModel.obterperfils()
        .then(perfils => {
            res.json(perfils);
        })
        .catch(e => {
            console.error(e);
            res.status(500).send("Erro ao obter os perfils.");
        });
}

module.exports = {
    postperfil,
    obterperfil 
};

