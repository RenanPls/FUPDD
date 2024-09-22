let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let nome = input() //+ converte em número, quero em txt
let idade = +input()

if (idade < 12){
    console.log(nome + ' eh crianca');
} else if (idade < 18){
    console.log(nome + ' eh jovem');
} else if (idade < 65){
    console.log(nome + ' eh adulto');
} else if (idade < 1000){
    console.log(nome + ' eh idoso');
} else {
    console.log(nome + ' eh mumia');
}

