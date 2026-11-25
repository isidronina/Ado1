import PromptSync from "prompt-sync";

const ler = PromptSync();

function calcularIngresso(tipo: string, quantidade: number): string {
  const precoBase = 28.5;
  let valorUnitario = precoBase;

  if (tipo.toLowerCase() === "meia") {
    valorUnitario = precoBase / 2;
  }

  const total = valorUnitario * quantidade;
  return `O total a pagar é R$ ${total.toFixed(2)}`;
}

const tipoIngresso = ler("Digite o tipo (Meia ou Inteira): ");
const qtdIngressos = Number(ler("Digite a quantidade: "));
console.log(calcularIngresso(tipoIngresso, qtdIngressos));
