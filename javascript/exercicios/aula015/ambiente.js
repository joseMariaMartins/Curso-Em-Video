let num = [5, 8, 9, 3]
num[3] = 3
// Metodo de adicionar valor no indice indicado


num.push(7)
// Metodo de adicionar valor ao ultimo coiso do coiso


num.length
// Conta as letras do coiso


num.sort()
// Deixa em ordem crescente


console.log(num)
console.log([0])

/*
for(let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}// Verificar a quamtiade de coisos sem ter que contar um a um
*/

for(let pos in num) {
    console.log(num[pos])
}

console.log(`O primeiro valor dox vetor é ${num}`)

let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)