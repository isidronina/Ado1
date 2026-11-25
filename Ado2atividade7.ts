import PromptSync from "prompt-sync";

const ler = PromptSync();

function desenharQuadrado(lado: number): void {
  for (let linha = 1; linha <= lado; linha++) {
    let textoLinha = "";

    for (let coluna = 1; coluna <= lado; coluna++) {
      textoLinha += "* ";
    }
    console.log(textoLinha.trim());
  }
}
const lado = Number(ler("Digite o tamanho do lado: "));
desenharQuadrado(lado);
