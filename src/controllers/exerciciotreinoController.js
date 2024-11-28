var exerciciotreinoModel = require("../models/exerciciotreinoModel");

function exercicio(req, res) {

    var body = req.body;
    console.log(body);

    if ( body == undefined) {
        res.status(400).send(`Seu body está undefined`);
    } else {
        console.log('ESTOU NO ELSE DE salvar O treino');
        exerciciotreinoModel.exercicio(body).then(
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
    exercicio
}