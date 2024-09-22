import { write } from "fs";

function count(vet: number[], value: number): number {
    let cont = 0
    for(let elem of vet){
        if (elem === value){
            cont ++
        }
    }
    return cont
}

let convert_Stress = (value: number) => value > 0 ? value : - value
function sum(vet: number[]): number {
    let soma = 0
    for ( let elem of vet){
        soma += convert_Stress(elem)
    }
    return soma
}

function average(vet: number[]): number {
    return sum(vet) / vet.length //divide pela quantidade q tem na lista
}

function more_men(vet: number[]): string {
    let contM = 0
    let contW = 0

    for (let elem of vet){
        if (elem > 0){
            contM++
        } else{
            contW++
        }
    }

    if (contM > contW){
        return 'men'
    } else if (contW > contM){
        return 'women'
    } else {
        return 'draw'
    }
}

function half_compare(vet: number[]): string {
    let cont1 = 0
    let cont2 = 0

    for(let i = 0; i < vet.length; i++){
        if (i < vet.length / 2) {
            cont1 += convert_Stress(vet[i])
        } else{
            cont2 += convert_Stress(vet[i])
        }
    }
    if (cont1 > cont2){
        return 'first'
    } else if (cont2 > cont1){
        return 'second'
    } else {
        return 'draw'
    }
}

function sex_battle(vet: number[]): string {
    let contM = 0
    let accM = 0

    let contW = 0
    let accW = 0

    for (let elem of vet){
        if (elem > 0){
            contM++
            accM += convert_Stress(elem)
        } else{
            contW++
            accW += convert_Stress(elem)
        }
    }

    let mediaM = accM / contM
    let mediaW = accW / contW

    if (mediaM > mediaW){
        return 'men'
    } else if (mediaW > mediaM){
        return 'women'
    } else {
        return 'draw'
    }






    return "";
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };