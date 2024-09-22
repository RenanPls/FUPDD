let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function horaeData() {
  let hora = +input();
  let minuto = +input();
  let dia = +input();
  let mes = +input();
  let ano = +input();

  ano = ano % 100;

  let horaFormatada = String(hora).padStart(2, '0'); 
  // padStart(2 caracteres, '0' a esquerda)
  // String é um tipo de dado que representa uma sequência de caracteres (perguntar para que serve)
  let minutoFormatado = String(minuto).padStart(2, '0');
  let diaFormatado = String(dia).padStart(2, '0');
  let mesFormatado = String(mes).padStart(2, '0');
  let anoFormatado = String(ano).padStart(2, '0');

  return `${horaFormatada}:${minutoFormatado} ${diaFormatado}/${mesFormatado}/${anoFormatado}`;
}

write(horaeData());