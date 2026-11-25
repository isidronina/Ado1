import PromptSync from "prompt-sync";

const ler = PromptSync();

function diaDaSemana(numero: number): string {
  if (numero === 0) {
    return "Domingo";
  } else if (numero === 1) {
    return "Segunda-feira";
  } else if (numero === 2) {
    return "Terça-feira";
  } else if (numero === 3) {
    return "Quarta-feira";
  } else if (numero === 4) {
    return "Quinta-feira";
  } else if (numero === 5) {
    return "Sexta-feira";
  } else if (numero === 6) {
    return "Sábado";
  } else {
    return "Dia da semana inválido";
  }
}

const dia = Number(ler("Digite o número do dia (0 a 6): "));
console.log(diaDaSemana(dia));
