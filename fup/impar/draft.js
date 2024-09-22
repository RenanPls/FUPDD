let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let P  = +input()
let D1  = +input()
let D2  = +input()

let soma = D1 + D2;

let par = soma % 2 === 0;

if (par) {
    if (P === 0){ // alice gritou par
        console.log(0) //  alice ganha
    } else { // se ela não gritou
        console.log(1) // Bob Ganha
    }
} else { // se o resultado da soma for impar
    if (P === 0){ // se alice gritou par
        console.log(1) //quem ganha é bob
    } else { // se alice gritou impar
        console.log(0) // alice ganha
    }
}

