var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

function grafico(idUsuario) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", grafico);

    var instrucaoSql = `
        SELECT m.nome AS musculo,
        SUM(e.gastoCal) AS gastoCal
        FROM exerciciosTreino AS et 
        JOIN exercicios AS e 
        ON e.idExercicio = et.fkExercicio 
        JOIN treino AS t 
        ON t.idTreino = et.fkTreino 
        JOIN musculos AS m 
        ON m.idMusculo = t.fkMusculo
        WHERE t.fkUsuario = ${idUsuario}
        GROUP BY et.fkTreino;`

    return database.executar(instrucaoSql);
}
module.exports = {
    grafico

};