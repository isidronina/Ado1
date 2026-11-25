import PromptSync from "prompt-sync";

const ler = PromptSync();

function obterDiaSemana(numero: number): string {
  if (numero === 0) return "Domingo";
  if (numero === 1) return "Segunda-feira";
  if (numero === 2) return "Terça-feira";
  if (numero === 3) return "Quarta-feira";
  if (numero === 4) return "Quintafeira";
  if (numero === 5) return "Sexta-feira";
  if (numero === 6) return "Sábado";
  return "Dia inválido";
}

function obterMes(numero: number): string {
  if (numero === 1) return "Janeiro";
  if (numero === 2) return "Feverero";
  if (numero === 3) return "Marco";
  if (numero === 4) return "Abril";
  if (numero === 5) return "Maio";
  if (numero === 6) return "Junho";
  if (numero === 7) return "Julho";
  if (numero === 8) return "Agosto";
  if (numero === 9) return "Setembro";
  if (numero === 10) return "Outubo";
  if (numero === 11) return "Novembro";
  if (numero === 12) return "Dezembro";
  return "Mês inválido";
}

function confirmarEnvio(dia: number, numDiaSemana: number, numMes: number, ano: number): string {
  const nomeDia = obterDiaSemana(numDiaSemana);
  const nomeMes = obterMes(numMes);
  return `Enviado ${nomeDia}, ${dia} de ${nomeMes} de ${ano}`;
}

const dia = Number(ler("Digite o dia do mês: "));
const diaSemana = Number(ler("Digite o número dia da semana (0 a 6): "));
const mes = Number(ler("Digite o número do mês (1 a 12): "));
const ano = Number(ler("Digite o ano: "));
console.log(confirmarEnvio(dia, diaSemana, mes, ano));
