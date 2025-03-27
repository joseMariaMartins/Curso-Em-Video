function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('[ERRO] Digite um número para que a tabuada seja gerada!')
    } else {
        let n = Number(num.value)   
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}