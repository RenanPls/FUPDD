function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let N = +input() // numero de linhas
    let D = +input() // disco
    let A = +input() // avião
// disco ta na frente ?  
    let frente = (D >= A) ? (D - A) : (N - A + D)

    let tras = (A >= D) ? (A - D) : (N - (D - A))

    let resultado = Math.min(frente, tras)

    write(resultado)

}
main();
