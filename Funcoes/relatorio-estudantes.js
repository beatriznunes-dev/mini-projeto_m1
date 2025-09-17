// Funcoes/gerar-relatorios.js

import { estudantes } from "../Banco_de_dados/dados.js";

export function gerarRelatorioDesempenho() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado para gerar o relatório.");
        return;
    }

    console.log("\n--- Relatório de Desempenho ---");
    estudantes.forEach(estudante => {
        const somaNotas = estudante.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / estudante.notas.length;
        const situacao = media >= 7 ? "APROVADO" : "REPROVADO";

        console.log(`- ${estudante.nome}: Média ${media.toFixed(2)} - Situação: ${situacao}`);
    });
}

export function gerarRelatorioEstatisticas() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado para gerar o relatório de estatísticas.");
        return;
    }

    const totalEstudantes = estudantes.length;
    const notasDeTodosEstudantes = estudantes.flatMap(estudante => estudante.notas);
    const somaTotalNotas = notasDeTodosEstudantes.reduce((soma, nota) => soma + nota, 0);
    const mediaGeralTurma = somaTotalNotas / notasDeTodosEstudantes.length;

    const notasMinima = Math.min(...notasDeTodosEstudantes);
    const notasMaxima = Math.max(...notasDeTodosEstudantes);

    console.log("\n--- Relatório de Estatísticas da Turma ---");
    console.log(`- Total de estudantes: ${totalEstudantes}`);
    console.log(`- Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);
    console.log(`- Nota mínima registrada: ${notasMinima}`);
    console.log(`- Nota máxima registrada: ${notasMaxima}`);
}