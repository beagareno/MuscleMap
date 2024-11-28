var treinosalvoModel = require("../models/treinosalvoModel");

function salvar(req, res) {

    var treinosalvo = req.body;
    console.log(treinosalvo);

    if ( treinosalvo == undefined) {
        res.status(400).send(`Seu treinosalvo está undefined`);
    } else {
        console.log('ESTOU NO ELSE DE salvar O treino');
        treinosalvoModel.salvar(treinosalvo)
            .then(
                function (resultado) {
                    console.log("resultado: "+ resultado);{
                        res.json(resultado)
                    }
                }
                
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao salvar o treino! Erro: ",
                        erro.sqlMessage
                    );
                    console.log('ESTOU NA PARTE DE CHAMAR O ERRO.SQLMESSAGE');
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    salvar
}