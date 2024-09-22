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

    let soma = 0 

    for (let i = A; i <= B; i++) {
        if (i % 2 === 0 && i % 3 === 0){ // le numero par e divisíveis por 3
            soma += i 
        }
    }
    write(soma)
}
main();
