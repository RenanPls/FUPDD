function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let Num1 = +input()
    let Num2 = +input()

    if ((Num1 % 3 === 0 && Num2 % 3 === 0) || (Num1 % 5 === 0 && Num2 % 5 === 0)){
        write('sim')
    } else{
        write('nao')
    }
}
main();
