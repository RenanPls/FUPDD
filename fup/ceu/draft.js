function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let N = +input()
    let resultado = []

    for (let i = 0; i <= 9; i++){
        if (i !== N){
            resultado.push(i)
        }
    }

    if (N !== 10){
        resultado.push("ceu")
    }

    write(`[ ${resultado.join(" ")} ]`)


}
main();
