function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }


let N = +input()

function ehPrimo(){
    if (N <= 1) {
        return 0
    } else if (N === 2){
        return 1
    } else if (N % 2 === 0){
        return 0
    }

    for (let i = 3; i * i <= N; i += 2){
        if (N % i === 0){
            return 0
        }
    }
    return 1
}

function main() {
    write(ehPrimo(N))

}
main();
