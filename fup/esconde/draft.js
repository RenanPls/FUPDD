function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let N = +input()

    for (let i = 1; i <= N; i+= 2) {
        write(i)
    }

    for (let i = N - 1; i >= 0; i -=2){ // diminui 1 do ultimo impar e vira par, recomeça outro laço
        write(i)
    }
}

main()
