var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        console.log('ESTOU NO IF EMAIL == UNDEFINED DA USUARIO CONTROLLER');
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        console.log('ESTOU NO ELSE IF SENHA == UNDEFINED DA USUARIO CONTROLLER');
        res.status(400).send("Sua senha está indefinida!");
    } else {

        console.log('ESTOU NO ELSE DE TUDO DANDO CERTO');
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); 

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            nome: resultadoAutenticar[0].nome,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha
                        }); 

                    } else if (resultadoAutenticar.length == 0) {
                        console.log('ESTOU NO ELSE IF RESULTADOAUTENTICAR.LENGTH == 0');
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        console.log('ESTOU NO ELSE PARA MAIS DE UM USUARIO COM O MESMO LOGIN E SENHA');
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    console.log('ESTOU NA FUNCTION CADASTRAR');

    if ( nome == undefined) {
        console.log('ESTOU NO IF NOME == UNDEFINED');
        res.status(400).send(`Seu nome está undefined`);
    } else if (email == undefined) {
        console.log('ESTOU NO ELSE IF EMAIL == UNDEFINED');
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        console.log('ESTOU NO ELSE IF SENHA == UNDEFINED');
        res.status(400).send("Sua senha está undefined!");
    }else {
        console.log('ESTOU NO ELSE DE CADASTRAR O NOME, EMAIL E SENHA');
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    console.log('ESTOU NA FUNCTION RESULTADO');
                    res.json(resultado);
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
    autenticar,
    cadastrar
}