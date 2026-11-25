import PromptSync from "prompt-sync";

const ler = PromptSync();

function acaoSemaforo(cor: string): string {
  const corLimpa = cor.toLowerCase();

  if (corLimpa === "vermelho") {
    return "Espere";
  } else if (corLimpa === "verde") {
    return "Atravesse";
  } else {
    return "Farol inoperante";
  }
}

const cor = ler("Digite a cor do semáforo: ");
console.log(acaoSemaforo(cor));
