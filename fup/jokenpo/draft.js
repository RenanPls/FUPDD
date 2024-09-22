let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let jog1 = input().trim();
let jog2 = input().trim();

let resultado = (jog1, jog2) => { //função de seta
  if (jog1 === jog2) {
    return "empate";
  }

  if (
    (jog1 === "R" && jog2 === "S") ||
    (jog1 === "P" && jog2 === "R") ||
    (jog1 === "S" && jog2 === "P")
  ) {
    return "jog1";
  }

  return "jog2";
};

write(resultado(jog1, jog2));