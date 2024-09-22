function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let N = +input()
    let vetor = []

    if (N === 0){
        write('[]')
    } else {
        let valores = input().split(' ').map(Number)

        for (let i = 0; i < N; i++) {
            let valor = valores[i]
            if (valor === 1){
                vetor.push('A')
            } else if(valor === 11){
                vetor.push('J')
            } else if(valor === 12){
                vetor.push('Q')
            } else if(valor === 13){
                vetor.push('K')
            } else {
                vetor.push(valor)
            }
        }
        write('[' + vetor.join(', ') + ']')
    }
    }

main();
