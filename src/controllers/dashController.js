var dashModel = require("../models/dashModel");

function grafico(req, res) {

    var body = req.body

    if ( body.idUsuario == undefined) {
        res.status(400).send(`Seu body está undefined`);
    } else {
        console.log('ESTOU NO ELSE DE mostrar a dash');
        dashModel.grafico(body.idUsuario).then(
                function (resultado) {
                    console.log("resultado: "+ resultado);{
                        res.json(resultado)
                    }
                }
                
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao mostrar sua dash! Erro: ",
                        erro.sqlMessage
                    );
                    console.log('ESTOU NA PARTE DE CHAMAR O ERRO.SQLMESSAGE');
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    grafico
}