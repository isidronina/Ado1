import PromptSync from "prompt-sync";

const ler = PromptSync();

function calcularSorvete(gramas: number): string {
  if (gramas <= 0) {
    return "Peso Inválido";
  }
  let precoPor100g = 3.5;

  if (gramas >= 1000) {
    precoPor100g = 3.0;
  }
  const total = (gramas / 100) * precoPor100g;
  return `O total a pagar é R$ ${total.toFixed(1)}`;
}



const gramas = Number(ler("Digite a quantidade em gramas: "));
console.log(calcularSorvete(gramas));
