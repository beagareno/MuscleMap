var treinoModel = require("../models/treinoModel");

function criar(req, res) {

    var musculo = req.body.musculoServer;

    console.log('ESTOU NA FUNCTION CRIAR');

    if ( musculo == '#') {
        console.log('ESTOU NO IF musculo == #');
        res.status(400).send(`Seu musculo está undefined`);
    } else {
        console.log('ESTOU NO ELSE DE criar O treino, com os musculos');
        treinoModel.criar(musculo)
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
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    console.log('ESTOU NA PARTE DE CHAMAR O ERRO.SQLMESSAGE');
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    criar
}