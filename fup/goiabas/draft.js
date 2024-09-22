function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let cesta = +input()
    let bananas = +input()
    let goiabas = +input()
    let mangas = +input()

    let qtd = bananas + goiabas + mangas

    if(qtd === cesta){
        write(1)
    } else {
        let viagens = Math.ceil(qtd / cesta)
        write(viagens)
    }
}
main();
