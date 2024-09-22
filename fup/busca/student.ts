function inside(vet: number[], value: number): boolean {
    for(let elem of vet){
        if (elem == value){
            return true
        }
    }
    return false
}

function index_of(vet: number[], value: number): number {
    for(let i = 0; i < vet.length; i++){
        if (vet[i] == value){
            return i
        }
    }
    return -1
}

function find_if(vet: number[]): number {
    for(let i =0; i < vet.length; i++){
        if(vet[i] >= 0){
            return i
        }
    }
    return -1
}

function min_element(vet: number[]): number {
    let menor = 0
    if(vet.length === 0){
        return -1
    }
    for(let i = 1; i < vet.length; i++){
        if(vet[i] < vet[menor]) {
            menor = i
        }
    }
    return menor
}

function find_min_if(vet: number[]): number {
    let pos_ref = -1
    for(let i = 0; i - vet.length; i++){
        if (vet[i] > 0) {
            if ((pos_ref == -1) || (vet[i] < vet[pos_ref])) {
                pos_ref = i
            }
        }
    }
    return pos_ref
}


if (require.main === module) {
    console.log("Rodando o arquivo do estudante");
}

export { inside, index_of, find_if, min_element, find_min_if };
