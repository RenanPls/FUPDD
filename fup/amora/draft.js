function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let frase = input()
    let trecho = input()

    let contagem = 0
    let pos = 0

    while ((pos = frase.indexOf(trecho, pos)) !== -1){ //usamos indexOf 
        contagem++
        pos += trecho.length
    }
    write(contagem)
}
main();
