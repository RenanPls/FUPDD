function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let A = +input()
    let B = +input()
    let C = +input()

    let H = +input()
    let L = +input()
    
    if ((A <= H && B <= L) || (A <= L && B <= H) ||
        (A <= H && C <= L) || (A <= L && C <= H) ||
        (B <= H && C <= L) || (B <= L && C <= H)) {
            write('S')
        } else {
            write('N')
        }

    // a caixa pode virar então esse metodo não funciona
    // let areaC = 2 * (A * B + A * C + B * C)
    // let areaJ = L * H

    // if (areaC < areaJ){
    //     write('S')
    // } else {
    //     write('N')
    // }
}
main();



