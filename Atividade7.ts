import PromptSync from "prompt-sync";

const ler = PromptSync();

function avaliarTemperatura(temp: number): string {
  let situacao = "";

  if (temp >= 41) {
    situacao = "Hipertermia";
  } else if (temp >= 39.6) {
    situacao = "Febre Alta";
  } else if (temp >= 37.6) {
    situacao = "Febre";
  } else if (temp >= 36) {
    situacao = "Normal";
  } else {
    situacao = "Hipotermia";
  }

  return `A situação para sua temperatura é ${situacao}`;
}

const temperatura = Number(ler("Digite a temperatura: "));
console.log(avaliarTemperatura(temperatura));
