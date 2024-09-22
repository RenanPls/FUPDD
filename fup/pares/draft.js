function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let A = +input()
    let B = +input()

    if (A > B){
        write('invalido')
        return
    }

    let soma = 0 //variavel

    for (let i = A; i <= B; i++) {
        if (i % 2 === 0){ // verifica os pares
            soma += i // soma dos pares
        }
    }
    write(soma)
}
main();
