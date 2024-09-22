function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let A = Number.parseFloat(input())
    let B = Number.parseFloat(input())
    let C = Number.parseFloat(input())

    let delta = (B *B) - (4 * A * C)

    if (delta > 0){
        let x1 = (-B + Math.sqrt(delta)) / (2*A)
        let x2 = (-B - Math.sqrt(delta)) / (2*A)
        write(x1.toFixed(2))
        write(x2.toFixed(2))
    } else if (delta === 0){
        let x = -B / (2 * A)
        write(x.toFixed(2))
    } else {
        write('nao ha raiz real')
    }

}

main();
