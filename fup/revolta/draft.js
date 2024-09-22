function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let tamanhoVetor = +input()
    let somaPares = 0
    let somaImpares = 0

    for (let i = 0; i <= tamanhoVetor; i++) {
        let valor = +input() // lê próximo numero das linhas
        if (valor % 2 === 0){ 
            somaPares += valor
        } else if (valor % 1 === 0){
            somaImpares += valor
        } 
    }

    if (somaImpares > somaPares){
        write('soldados')
    } else if (somaPares > somaImpares){
        write('rebeldes')
    } else if (somaPares === somaImpares){
        write('empate')
    }
}
main();
