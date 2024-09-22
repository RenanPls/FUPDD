function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let texto = input()
    let indice = +input()
    let qtd = +input()

    if (indice < 0){
        write('')
        return
    }

    let resposta = ''
    let fim  = Math.min(texto.length, indice + qtd)

    for(let i = indice; i < fim; i++){
        resposta += texto[i]
    }
write(resposta)

}
main();
