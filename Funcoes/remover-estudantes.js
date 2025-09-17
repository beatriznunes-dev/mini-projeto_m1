// Funcoes/remover-estudantes.js

import pkg from "readline-sync";
const readline = pkg;
import { estudantes } from "../Banco_de_dados/dados.js";

export function removerEstudantes() {
    // 1. Pede o nome do estudante que será removido
    const nomeBusca = readline.question("Digite o nome do estudante que deseja remover: ");
    
    // 2. Encontra o índice do estudante no array
    const indiceParaRemover = estudantes.findIndex(estudante => 
        estudante.nome.toLowerCase() === nomeBusca.toLowerCase()
    );

    // 3. Verifica se o estudante foi encontrado
    if (indiceParaRemover === -1) {
        console.log(` Nenhum estudante encontrado com o nome "${nomeBusca}".`);
        return;
    }

    // 4. Remove o estudante do array usando o método splice()
    estudantes.splice(indiceParaRemover, 1);

    console.log(`\n Estudante "${nomeBusca}" removido com sucesso!`);
}