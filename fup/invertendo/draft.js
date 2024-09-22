function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }


let Num = +input()
let vetor = input().split(' ').map(Number)

function inverterVetor() {
    let vetorInvertido = []
    for (let i = vetor.length - 1; i >= 0; i-- ){ // .length impreme o numero de elementos
        vetorInvertido.push(vetor[i])
    }
    write(`[ ${vetorInvertido.join(' ')} ]`)
}

inverterVetor();
