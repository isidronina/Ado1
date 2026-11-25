import PromptSync from "prompt-sync";

const ler = PromptSync();

function avaliarOrcamento(ganhos: number, gastos: number): string {
  if (ganhos >= gastos) {
    return "Você está dentro do orçamento!";
  } else {
    return "Você está fora do orçamento! Não gaste mais!";
  }
}

const ganhos = Number(ler("Digite o total de ganhos: "));
const gastos = Number(ler("Digite o total de gastos: "));
console.log(avaliarOrcamento(ganhos, gastos));
