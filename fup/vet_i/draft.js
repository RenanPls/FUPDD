const { WriteStream } = require("fs");

function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let Num = +input()

    let vetor = []

    for (let i = 0; i < Num; i++){
        let elemento = +input() //le um elemento
        vetor.push(elemento) // adiciona o elemento ao array
    }
    vetor.forEach(e => write(e)) //.forEach percorre cada elemento e depois chama write para imprimir em nova linha
}
main();
