import { estudantes} from "../Banco_de_dados/dados.js";

export function listarEstudantes() {
    if ( estudantes.length ===0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }
    estudantes.forEach ((est,  i) => {
    console.log( `${i + 1}. ${est.nome} - Idade: ${est.idade} - Notas: [${est.notas.join(", ")}]`);   
 });
}
