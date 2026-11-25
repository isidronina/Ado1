import PromptSync from "prompt-sync";


const ler = PromptSync();

function soletrarComContador(frase: string): void {
  let contador = 1;

  
  for (let i = 0; i < frase.length; i++) {
    const caractere = frase[i];
    if (caractere === " ") {
      console.log("Espaço");
    } else {
      console.log(`Letra ${contador} = ${caractere}`);
      contador++;
    }
  }
}
const frase = ler("Digitar uma frase: ");
soletrarComContador(frase);
