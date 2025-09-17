import pkg from "readline-sync";
const readline = pkg;
import { cadastrarEstudantes} from "./Funcoes/cadastro-estudantes.js";
import { listarEstudantes } from "./Funcoes/listar-estudantes.js";
import { buscarEstudantes } from "./Funcoes/buscar-estudantes.js";
import { calcularMedia } from "./Funcoes/calculos.js";
import { gerarRelatorioDesempenho, gerarRelatorioEstatisticas } from "./Funcoes/relatorio-estudantes.js";
import { editarEstudantes } from "./Funcoes/editar-estudantes.js";
import { removerEstudantes } from "./Funcoes/remover-estudantes.js";

function menu() {
    let opcao;
    do {
        console.log("\n=== Gerenciador de estudantes ===");
        console.log("1-Cadastrar estudantes");
        console.log("2-Listar estudantes");
        console.log("3-Buscar estudantes");
        console.log("4-Calcular media de notas");
        console.log("5-Gerar Relatorios");
        console.log("6-Editar estudantes");
        console.log("7-Remover estudantes" );
        console.log("0-Sair");
        
        opcao = readline.question("Escolha uma opcao: ");

        switch (opcao) {
            case "1":
                cadastrarEstudantes();
                break;
                case "2":
                listarEstudantes();
                break;

                case "3":
                buscarEstudantes();
                break;

                case "4":
                calcularMedia();
                break;

                case "5":
        // Novo submenu para relatórios
        let opcaoRelatorio;
        do {
            console.log("\n--- Opções de Relatórios ---");
            console.log("1-Relatório de Desempenho");
            console.log("2-Relatório de Estatísticas");
            console.log("0-Voltar ao Menu Principal");
            opcaoRelatorio = readline.question("Escolha uma opcao de relatorio: ");

            switch (opcaoRelatorio) {
                case "1":
                    gerarRelatorioDesempenho();
                    break;
                case "2":
                    gerarRelatorioEstatisticas();
                    break;
                case "0":
                    console.log("Voltando...");
                    break;
                default:
                    console.log("Opção de relatório inválida!");
            }
        } while (opcaoRelatorio !== "0");
        break; // Finaliza o case "5"

                case "6":
                    editarEstudantes();
                    break;

                case "7":
                    removerEstudantes();
                    break;

                case "0":
                    console.log("Saindo...");
                    break;
                    default:
                        console.log("Opcao inválida!")
        }
    } while (opcao !== "0");
}

menu();