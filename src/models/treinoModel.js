var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

    function criar (musculo){

        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", musculo);
        
        var instrucaoSql = `
        SELECT idExercicio, nome, gastoCal FROM exercicios WHERE fkMusculo = '${musculo}';
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
    }
module.exports = {
    criar
    
};