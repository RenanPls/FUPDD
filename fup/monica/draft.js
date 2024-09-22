function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function input() {
    let X = input; // chama como referência
    X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); // lê, converte pra string e separa
    return X.L.shift();
} // em dúvida, perguntar em sala

function write(text, endl = "\n") {
    process.stdout.write("" + text + endl);
} // em dúvida, perguntar em sala

function main(){
    let M = +input();
    let A = +input();
    let B = +input();

    let C = M - (A + B);

    let maior = A > B ? A : B; // se A > B, maior recebe A, contrário recebe o B
    maior = C > maior ? C : maior; // troca a referência ou não

    write(maior);

}

main();