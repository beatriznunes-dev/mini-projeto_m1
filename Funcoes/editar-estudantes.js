// Funcoes/editar-estudantes.js

import pkg from "readline-sync";
const readline = pkg;
import { estudantes } from "../Banco_de_dados/dados.js";

export function editarEstudantes() {
    // 1. Pede o nome do estudante que será editado
    const nomeBusca = readline.question("Digite o nome do estudante que deseja editar: ");
    
    // 2. Busca o estudante exato no array
    const estudanteParaEditar = estudantes.find(estudante => 
        estudante.nome.toLowerCase() === nomeBusca.toLowerCase()
    );

    // 3. Verifica se o estudante foi encontrado
    if (!estudanteParaEditar) {
        console.log(`❌ Nenhum estudante encontrado com o nome "${nomeBusca}".`);
        return;
    }

    console.log(`\n✅ Estudante encontrado: ${estudanteParaEditar.nome}`);
    console.log("Deixe em branco para manter o valor atual.");

    // 4. Pede as novas informações
    const novoNome = readline.question(`Novo nome (${estudanteParaEditar.nome}): `);
    const novaIdadeStr = readline.question(`Nova idade (${estudanteParaEditar.idade}): `);
    const novasNotasStr = readline.question(`Novas notas (separadas por vírgula) [${estudanteParaEditar.notas.join(", ")}]: `);

    // 5. Atualiza os dados, verificando se o usuário inseriu um novo valor
    if (novoNome.trim() !== "") {
        estudanteParaEditar.nome = novoNome.trim();
    }
    
    if (novaIdadeStr.trim() !== "") {
        const novaIdade = Number(novaIdadeStr.trim());
        if (!isNaN(novaIdade) && novaIdade > 0) {
            estudanteParaEditar.idade = novaIdade;
        } else {
            console.log(" Idade inválida. A idade não foi alterada.");
        }
    }
    
    if (novasNotasStr.trim() !== "") {
        const novasNotas = novasNotasStr.split(",").map(n => Number(n.trim()));
        if (!novasNotas.some(isNaN) && !novasNotas.some(n => n < 0 || n > 10)) {
            estudanteParaEditar.notas = novasNotas;
        } else {
            console.log("Notas inválidas. As notas não foram alteradas.");
        }
    }

    console.log(`\n Estudante "${estudanteParaEditar.nome}" editado com sucesso!`);
}