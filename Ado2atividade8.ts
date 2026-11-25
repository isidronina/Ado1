import PromptSync from "prompt-sync";

const ler = PromptSync();

function desenharRetangulo(base: number, altura: number): void {
  for (let linha = 1; linha <= altura; linha++) {
    let textoLinha = "";

    for (let coluna = 1; coluna <= base; coluna++) {
      textoLinha += "* ";
    }
    console.log(textoLinha.trim());
  }
}
const base = Number(ler("Digite a base: "));
const altura = Number(ler("Digite a altura: "));
desenharRetangulo(base, altura);
