var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

    function salvar (treinosalvo){

        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", treinosalvo);
        
        var instrucaoSql = `
        INSERT INTO treino VALUES (default, ${treinosalvo.idUsuario}, ${treinosalvo.idMusculo});
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
    }
module.exports = {
    salvar
    
};