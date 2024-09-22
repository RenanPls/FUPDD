function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let C = +input();
    let passageiros = 0;

    while (true){
        let M = +input()

        passageiros += M

        if (passageiros === 0){
            write('vazio')
        } else if (passageiros < C){
            write('ainda cabe')
        } else if (passageiros === C){
            write('lotado')
        } else if (passageiros >= 2 * C){
            write('hora de partir')
            break
        } else {
            write('lotado')
        }
    }
}
main();
