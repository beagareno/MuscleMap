var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

    function exercicio (body){

        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", body);

        var instrucaoSql = `INSERT INTO exerciciosTreino VALUES `
        for (var i = 0; i < body.exercicios.length - 1; i++) {
            instrucaoSql += `(${body.exercicios[i].idExercicio}, ${body.idTreino}),`
        }
        instrucaoSql += `(${body.exercicios[i].idExercicio}, ${body.idTreino});`

        return database.executar(instrucaoSql);
    }
module.exports = {
    exercicio
    
};