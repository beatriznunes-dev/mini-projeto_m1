// Funcoes/buscar-estudantes.js

import pkg from "readline-sync";
const readline = pkg;
import { estudantes } from "../Banco_de_dados/dados.js";

export function buscarEstudantes() {
    const nomeBusca = readline.question("Digite o nome do estudante que deseja buscar: ");

    // A busca é feita por parte do nome, ignorando maiúsculas/minúsculas
    const resultados = estudantes.filter(estudante => 
        estudante.nome.toLowerCase().includes(nomeBusca.toLowerCase())
    );

    if (resultados.length === 0) {
        console.log(`Nenhum estudante encontrado com o nome "${nomeBusca}".`);
        return;
    }

    console.log(`\n Estudantes encontrados:`);
    resultados.forEach(est => {
        console.log(`- Nome: ${est.nome}, Idade: ${est.idade}, Notas: [${est.notas.join(", ")}]`);
    });
}