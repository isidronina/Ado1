import PromptSync from "prompt-sync";

const ler = PromptSync();

function intervalocrescente(inicio: number, fim: number): void {
  for (let i = inicio; i <= fim; i++) {
    console.log(i);
  }
}

const inicio = Number(ler("Digite o início: "));
const fim = Number(ler("Digite o fim: "));
intervalocrescente(inicio, fim);
