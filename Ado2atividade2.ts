import PromptSync from "prompt-sync";

const ler = PromptSync();

function regressivaAteUm(inicio: number): void {
  for (let i = inicio; i >= 1; i--) {
    console.log(i);
  }
}

const numero = Number(ler("Digite um número: "));
regressivaAteUm(numero);
