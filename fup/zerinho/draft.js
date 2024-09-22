function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let a = +input()
    let b = +input()
    let c = +input()

    if (a === b && b === c){
        write('empate')
    } else if (a !== b && a !== c){ // se a for diferente de b e c
        write('jog1')
    } else if (b !== a && b !== c){
        write('jog2')
    } else {
        write('jog3')
    }
}
main();
