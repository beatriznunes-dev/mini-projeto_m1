// Funcoes/calcular-media.js

import { estudantes } from "../Banco_de_dados/dados.js";

export function calcularMedia() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado para calcular a média.");
        return;
    }

    console.log("\n Médias dos estudantes:");
    estudantes.forEach(estudante => {
        const somaNotas = estudante.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / estudante.notas.length;
        console.log(`- ${estudante.nome}: Média ${media.toFixed(2)}`);
    });
}