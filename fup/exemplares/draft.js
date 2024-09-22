function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let qtd = +input()
    let vetor = input().split(' ').map(Number)
    
    for(let i = 0; i < qtd; i++){
        
    }
}
main();
