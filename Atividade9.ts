import PromptSync from "prompt-sync";

const ler = PromptSync();

function avaliarIMC(altura: number, peso: number): string {
  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc >= 40) {
    classificacao = "Obesidad Grau III";
  } else if (imc >= 35) {
    classificacao = "Obesidade Grau II";
  } else if (imc >= 30) {
    classificacao = "Obesiddae Grau I";
  } else if (imc >= 25) {
    classificacao = "Sobrepeso";
  } else if (imc >= 18.5) {
    classificacao = "Peso Normal";
  } else {
    classificacao = "Abaixo do Peso";
  }

  return `Seu IMC é ${imc.toFixed(2)}\nSua classificação é ${classificacao}`;
}

const altura = Number(ler("Digite a altura em metros: "));
const peso = Number(ler("Digite o peso em kg: "));
console.log(avaliarIMC(altura, peso));
