function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let C = +input()
    let A = +input()

    let total =  C - 1

    let viagens = Math.ceil(A / total) // Math.ceil arredonda para cima
    write(viagens)
    }
    
main();
