function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let chuteCB = +input()
    let chuteC = +input()
    let qtdAnimais = +input()

    let somaPatas = 0

    for(let i = 0; i < qtdAnimais; i++){
        let animal = input()
        if (animal === 'v'){
            somaPatas += 4
        } else if(animal === 'g'){
            somaPatas += 2
        } else if(animal === 'c'){
            somaPatas += 4
        }
    }

    write(somaPatas)

    let difChico = Math.abs(chuteCB - somaPatas)
    let difCebolinha = Math.abs(chuteC - somaPatas)

    if (difChico < difCebolinha){
        write('Chico Bento')
    } else if (difCebolinha < difChico){
        write('Cebolinha')
    } else {
        write('empate')
    }
}
main();
