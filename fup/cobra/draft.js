function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let N = +input()
    let X = +input()
    let Y = +input()
    let C = input() // direção inicial, sem +, lembra burro, não é numero
    let S = +input()

    let mov = {
        'U' : [0, -1],
        'D' : [0, 1],
        'L' : [-1, 0],
        'R' : [1, 0]
    }

    let dx = mov[C][0]; 
    let dy = mov[C][1];

    X = (X + dx * S) % N
    Y = (Y + dy * S) % N

    if (X< 0){
        X += N
    } else if (Y < 0) {
        Y += N
    }

    write(X + ' ' + Y)

}
main();
