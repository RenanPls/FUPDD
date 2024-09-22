function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let Num = +input()
     if (Num % 2 === 0){
        write('PAR')
     } else {
        write('IMPAR')
     }
}
main();
