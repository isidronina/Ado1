import PromptSync from "prompt-sync";

const ler = PromptSync();

function intervaloRegressivo(fim: number, inicio: number): void {
  for (let i = fim; i >= inicio; i--) {
    console.log(i);
  }
}

const fim = Number(ler("Digite o número inicial (maior): "));

const inicio = Number(ler("Digite o número final (menor): "));
intervaloRegressivo(fim, inicio);
