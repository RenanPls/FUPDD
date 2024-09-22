function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let P = +input()
    let S = +input()
    let E = +input()

    let pos = 0
    let saltoA = S

    while(true){
        let salto = pos + saltoA

        if (salto >= P){
            write(pos + ' saiu')
            break
        } 

        write(pos + ' ' + salto)

        pos = salto - E

        if(pos < 0){
            write( pos + ' morreu')
            break
        }

        saltoA -= 10

        if (saltoA <= 0){
            saltoA = 0
        }

    }
}
main();
