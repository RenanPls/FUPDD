function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let frase = input().trim()

    let vogais = 'aeiou'

    let vogaisE = ''
    let consoE = ''

    for (let i = 0; i < frase.length ; i++){
        let caractere = frase[i]
        if (caractere !== ' '){ //!== ignora espaços LEMBRAR
            if (vogais.includes(caractere)){
                vogaisE += caractere
            } else {
                consoE += caractere
            }
        } 
    }
    write(vogaisE)
    write(consoE)

}
main();
