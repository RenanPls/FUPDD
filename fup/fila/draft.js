function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let N = +input()
    let vetor = input().split(' ').map(Number)
    let impares = []
    let pares = []


    for(let i = 0; i < N; i++){
        if (vetor[i] % 2 === 0){
            pares.push(vetor[i])
        } else {
            impares.push(vetor[i])
        }

    }
    write(`[ ${impares.join(' ')} ]`)
    write(`[ ${pares.join(' ')} ]`)

}
main();
