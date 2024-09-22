function input() { let X = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input() { let X = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text, endl="\n") { process.stdout.write("" + text + endl); }

function main() {
    let salario = Number.parseFloat(input())
    
    let salarioAtt;

    if (salario <= 1000.00){
        salarioAtt = salario + (salario * 20 / 100) // salario + (salario * aumento de 20/100 ou 20%)
    } else if (salario <= 1500.00){
        salarioAtt = salario + (salario * 15 / 100)
    } else if (salario <= 2000.00){
        salarioAtt = salario + (salario * 10 / 100)
    } else if (salario > 2000.00){
        salarioAtt = salario + (salario * 5 / 100)
    }
    write(salarioAtt.toFixed(2))
}
main();
