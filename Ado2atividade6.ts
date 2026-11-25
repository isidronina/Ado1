import PromptSync from "prompt-sync";

const ler = PromptSync();


function desenharLinha(quantidade: number): void {
  let linha = "";

  for (let i = 1; i <= quantidade; i++) {
    linha += "* ";
  }
  console.log(linha.trim());
}
const qtd = Number(ler("Digite as quantidade de pontos: "));
desenharLinha(qtd);
