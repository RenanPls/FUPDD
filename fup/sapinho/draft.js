const { writeSync } = require("fs");

function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let P = +input() //profundidade
    let S = +input() // salto em cm
    let E = +input() // Escorregando

    let pos = 0

    while(pos < P){
        let salto = pos + S

        if (salto >= P){
            write(pos + " saiu")
            break
        }
        write(pos + ' ' + salto) // continua imprime posição + salto
        pos = salto - E
    }

    
}
main();
