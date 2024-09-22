function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let dias = +input()

    let calorias = []

    for(let i = 0; i < dias; i++){
        calorias.push(+input()) //lê as linhas e adicona no vetor calorias
    }

    let soma = calorias.reduce((acc, val) => acc + val, 0) //.reduce soma os elementos do array e cria 1 só elemento
                              // acc é o resultado da soma, val é valor atual, inicia no 0 e vai somando até acabar
    let media = soma / dias

    write(media.toFixed(1))

}
main();
