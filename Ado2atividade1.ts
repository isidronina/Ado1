import PromptSync from "prompt-sync";

const ler = PromptSync();

function contarAte(limite: number): void {
  for (let i = 1; i <= limite; i++) {
    console.log(i);
  }
}

const numero = Number(ler("Digite um número: "));
contarAte(numero);
