function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let frase = input()

    let fraseInvertida = frase.split('').reverse().join('') 

    write(fraseInvertida)
}
main();


// split separa string em array com caracteres
// reverse inverte
// join junta todos os caracteres