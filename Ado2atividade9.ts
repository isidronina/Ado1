import PromptSync from "prompt-sync";

const ler = PromptSync();

function mostrarTabuada(numero: number): void {
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

const numero = Number(ler("Digite um número para ver a tabuada: "));
mostrarTabuada(numero);
