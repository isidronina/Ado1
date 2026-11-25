import PromptSync from "prompt-sync";

const ler = PromptSync();

function soletrarFrase(frase: string): void {
  for (let i = 0; i < frase.length; i++) {
    console.log(frase[i]);
  }
}

const frase = ler("Digite uma frase: ");
soletrarFrase(frase);
