// Configurações padrão como, guardar elementos HTML para manipular posteriormente
let num = document.querySelector('input#fnum') // Seleciona o elemento de input com id 'fnum'
let lista = document.querySelector('select#flista') // Seleciona o elemento de select com id 'flista'
let res = document.querySelector('div#res') // Seleciona o elemento de div com id 'res'
let valores = [] // Inicializa um array vazio para armazenar os valores

// Verifica se o valor digitado está entre 1 e 100
function isNumero(n) {
    // Se (Converte para número) número for maior ou igual a 1 e menor ou igual a 100 retornar true, senão false
    if (Number(n) >= 1 && Number(n) <= 100) { // Converte 'n' para número e verifica se está entre 1 e 100
        return true // Retorna true se 'n' está entre 1 e 100
    } else {
        return false // Retorna false caso contrário
    }
}

// Verifica se o número digitado já está na lista
function inLista(n, l) {
    // O método indexOf encontra a posição de um valor no array.
    // Nesta linha, indexOf localiza o valor digitado pelo usuário e verifica se ele já está presente na lista.
    if (l.indexOf(Number(n)) != -1) { // Converte 'n' para número e verifica se está presente no array 'l'
        return true // Retorna true se o número está na lista
    } else {
        return false // Retorna false caso contrário
    }
}

// Adiciona os valores na lista
function adicionar() {
    // Se isNumero(num.value) é verdadeiro e inLista(num.value, valores) é falso
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // O push é utilizado para adicionar o número na lista
        valores.push(Number(num.value)) // Adiciona o valor no array 'valores'
        // Criação de um novo elemento na lista
        let item = document.createElement('option') // Cria um novo elemento 'option'
        item.text = `Valor ${num.value} adicionado.` // Define o texto do elemento 'option'
        lista.appendChild(item) // Adiciona o elemento 'option' à lista
        res.innerHTML = '' // Limpa o conteúdo da div 'res'
    } else {
        window.alert('Valor inválido ou já encontrado na lista') // Exibe um alerta se o valor for inválido ou já estiver na lista
    }
    num.value = '' // Limpa o campo de entrada
    num.focus() // Define o foco no campo de entrada
}

function finalizar() {
    if (valores.length == 0) { // Verifica se o array 'valores' está vazio
        window.alert('Adicione valores antes de finalizar!') // Exibe um alerta se não houver valores
    } else {
        let tot = valores.length // Total de valores
        let maior = valores[0] // Inicializa 'maior' com o primeiro valor do array
        let menor = valores[0] // Inicializa 'menor' com o primeiro valor do array
        let soma = 0 // Inicializa a soma com 0
        let media = 0 // Inicializa a média com 0
        for(let pos in valores) { // Itera sobre cada valor no array 'valores'
            soma += valores[pos] // Adiciona o valor atual à soma
            if (valores[pos] > maior) // Verifica se o valor atual é maior que 'maior'
                maior = valores[pos] // Atualiza 'maior' com o valor atual
            if (valores[pos] < menor) // Verifica se o valor atual é menor que 'menor'
                menor = valores[pos] // Atualiza 'menor' com o valor atual
        }
        media = soma / tot // Calcula a média
        res.innerHTML = '' // Limpa o conteúdo da div 'res'
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>` // Adiciona o total de números à div 'res'
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` // Adiciona o maior valor à div 'res'
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>` // Adiciona o menor valor à div 'res'
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>` // Adiciona a soma dos valores à div 'res'
        res.innerHTML += `<p>A média de todos os valores é ${media}.</p>` // Adiciona a média dos valores à div 'res'
    }
}
