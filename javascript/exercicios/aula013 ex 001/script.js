function Contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    // So guarda os dados pra usa depois

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        // Codnição para se a pessoa tente rodar o programa sem digitar dados
    } else {
        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        // Conversão de STRING para NUMBER

        // Verifica se é contagem crescente ou regressiva
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                // Inicialização fala que C e = a I; A condição e que se c for <= a f e para repetir C += p
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                // C = a i; Se C for >= f; repetir C -= p
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}
