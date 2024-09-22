function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let v1 = +input()
    let v2 = +input()
    let v3 = +input()
    let v4 = +input()
    let v5 = +input()

    let menor = Math.min(v1, v2, v3, v4,v5) //Math.min encontra o menor entre as variaveis

    write(menor)
}
main();
