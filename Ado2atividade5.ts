import PromptSync from "prompt-sync";

const ler = PromptSync();

function paresNoIntervalo(inicio: number, fim: number): void {
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

const inicio = Number(ler("Digit o início: "));
const fim = Number(ler("Digite o fim: "));

paresNoIntervalo(inicio, fim);
