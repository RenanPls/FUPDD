function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let N = +input()

    let vetor = []

    if (N === 0){
        console.log('[ ]')
    } else {
        vetor = input().split(' ').map(Number) // map converte vetor para número

        write(`[ ${vetor.join(' ')} ]`) // join une elementos em 1 array, adicionamos (' ') pra colocar espaço entres eles
    }

}
main();
