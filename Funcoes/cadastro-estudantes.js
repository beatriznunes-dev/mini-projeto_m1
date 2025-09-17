import { estudantes } from  "../Banco_de_dados/dados.js";
import pkg from "readline-sync";
const readline = pkg;

export function cadastrarEstudantes() {
    const nome = readline.question ("Nome:");
    const idade= Number (readline.question (" Idade: "));
    const notas= readline.question ("Notas ( separadas por vírgulas) :")
    .split (",")
    .map(n => Number(n.trim()));

    if (!nome || idade <= 0 || notas.some (n => n < 0 || n > 10)) {
        console.log ("Dados inválidos ! ") ;
        return;
    }

    estudantes.push ( { nome,idade,notas } );
}
