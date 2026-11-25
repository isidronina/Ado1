import PromptSync from "prompt-sync";

const ler = PromptSync();

function avaliarAluno(n1: number, n2: number, n3: number): string {
  const media = (n1 + n2 + n3) / 3;
  let situacao = "";

  if (media === 0) {
    situacao = "Desistente";
  } else if (media >= 8) {
    situacao = "Aprovado com Sucesso";
  } else if (media >= 6) {
    situacao = "Aprovado";
  } else if (media >= 3) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }
  return `A média d aluno é ${media.toFixed(1)}\nSitução: ${situacao}`;
}

const nota1 = Number(ler("Digite a primeira nota: "));

const nota2 = Number(ler("Digite a segunda nota: "));
const nota3 = Number(ler("Digite a terceira nota: "));

console.log(avaliarAluno(nota1, nota2, nota3));
