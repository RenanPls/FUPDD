//let __lines = require("fs").readFileSync(0).toString().split("\n");
//let input = () => __lines.length === 0 ? "" : __lines.shift();
//let write = (text, end="\n") => process.stdout.write("" + text + end);

//  let a = +input()
//  let b = +input()
//  let resu = Math.floor(a / b);
//  let resto = a % b; 

//write(`${resu} ${resto}`);

var readlineSync = require('readline-sync');
let input = () : string => readlineSync.question();
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

write("Digite seu nome: ", "");
let nome = input();
console.log('Oi ' + nome + '!');
