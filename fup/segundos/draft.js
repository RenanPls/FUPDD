let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function converter(segundos) {
  let h = Math.floor(segundos / 3600);
  let m = Math.floor((segundos % 3600) / 60);
  let s = segundos % 60;

  return `${h}:${m}:${s}`; //perguntar para que serve `${ 
}

let tempo = +(input().trim()); // trim remove espaços em branco
                               // + converte para números inteiros
write(converter(tempo));