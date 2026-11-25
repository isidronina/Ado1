import PromptSync from "prompt-sync";

const ler = PromptSync();

function trianguloEsquerda(altura: number): void {
  for (let linha = 1; linha <= altura; linha++) {
    let textoLinha = "";

    for (let coluna = 1; coluna <= linha; coluna++) {
      textoLinha += "* ";
    }

    console.log(textoLinha.trim());
  }
}

const altura = Number(ler("Digite a altura do triângolo: "));
trianguloEsquerda(altura);
