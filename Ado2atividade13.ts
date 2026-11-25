import PromptSync from "prompt-sync";

const ler = PromptSync();

function trianguloDireita(altura: number): void {
  for (let linha = 1; linha <= altura; linha++) {
    let textoLinha = "";

    for (let espaco = 1; espaco <= altura - linha; espaco++) {
      textoLinha += "  ";
    }

    for (let estrela = 1; estrela <= linha; estrela++) {
      textoLinha += "* ";
    }

    console.log(textoLinha.trimEnd());
  }
}

const altura = Number(ler("Digite a altura do triânglo: "));
trianguloDireita(altura);
