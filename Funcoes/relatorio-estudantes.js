// Importa os dados dos estudantes
import { estudantes } from "../Banco_de_dados/dados.js";

// ========================
// Função auxiliar
// ========================
function calcularMediaEstudante(estudante) {
  if (!estudante.notas || estudante.notas.length === 0) return 0;
  const soma = estudante.notas.reduce((total, nota) => total + nota, 0);
  return soma / estudante.notas.length;
}

// ========================
// 1. Relatório de Desempenho (geral)
// ========================
export function gerarRelatorioDesempenho() {
  if (estudantes.length === 0) {
    console.log("Nenhum estudante cadastrado para gerar o relatório.");
    return;
  }

  console.log("\n--- Relatório de Desempenho ---");
  estudantes.forEach(estudante => {
    const media = calcularMediaEstudante(estudante);
    const situacao = media >= 7 ? "APROVADO" : media >= 5 ? "RECUPERAÇÃO" : "REPROVADO";

    console.log(`- ${estudante.nome}: Média ${media.toFixed(2)} - Situação: ${situacao}`);
  });
}

// ========================
// 2. Relatório de Aprovados
// ========================
export function relatorioAprovados() {
  const aprovados = estudantes.filter(est => calcularMediaEstudante(est) >= 7);

  if (aprovados.length === 0) {
    console.log("Nenhum estudante aprovado.");
    return;
  }

  console.log("\n--- Estudantes Aprovados ---");
  aprovados.forEach(est => {
    console.log(`- ${est.nome}: Média ${calcularMediaEstudante(est).toFixed(2)}`);
  });
}

// ========================
// 3. Relatório de Recuperação
// ========================
export function relatorioRecuperacao() {
  const recuperacao = estudantes.filter(est => {
    const media = calcularMediaEstudante(est);
    return media >= 5 && media < 7;
  });

  if (recuperacao.length === 0) {
    console.log("Nenhum estudante em recuperação.");
    return;
  }

  console.log("\n--- Estudantes em Recuperação ---");
  recuperacao.forEach(est => {
    console.log(`- ${est.nome}: Média ${calcularMediaEstudante(est).toFixed(2)}`);
  });
}

// ========================
// 4. Relatório de Estatísticas da Turma
// ========================
export function relatorioEstatisticas() {
  if (estudantes.length === 0) {
    console.log("Nenhum estudante cadastrado para gerar o relatório de estatísticas.");
    return;
  }

  const totalEstudantes = estudantes.length;
  const notasDeTodosEstudantes = estudantes.flatMap(estudante => estudante.notas);
  const somaTotalNotas = notasDeTodosEstudantes.reduce((soma, nota) => soma + nota, 0);
  const mediaGeralTurma = somaTotalNotas / notasDeTodosEstudantes.length;

  const notaMinima = Math.min(...notasDeTodosEstudantes);
  const notaMaxima = Math.max(...notasDeTodosEstudantes);

  console.log("\n--- Relatório de Estatísticas da Turma ---");
  console.log(`- Total de estudantes: ${totalEstudantes}`);
  console.log(`- Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);
  console.log(`- Nota mínima registrada: ${notaMinima}`);
  console.log(`- Nota máxima registrada: ${notaMaxima}`);
}
// Relatório de Reprovados
export function relatorioReprovados() {
  const reprovados = estudantes.filter(est => calcularMediaEstudante(est) < 5);

  if (reprovados.length === 0) {
    console.log("Nenhum estudante reprovado.");
    return;
  }

  console.log("\n--- Estudantes Reprovados ---");
  reprovados.forEach(est => {
    console.log(`- ${est.nome}: Média ${calcularMediaEstudante(est).toFixed(2)}`);
  });
}
