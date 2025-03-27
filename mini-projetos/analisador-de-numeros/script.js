let num = document.getElementById('fnum')
let flista = document.getElementById('flista')
let res= document.getElementById('res')
let vlaores = []

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value)) {
        alert('[ERRRO]!! Digite um numero entre 1 e 100')
    } else {
        alert('TUDO OK')
    }
}