function verificar() {
    var data = new Date()
    // Pega a data atual
    var ano = data.getFullYear()
    // Pega o ano atual
    var fano = document.getElementById('txtano').value
    // armazena o ano digitado pelo usuario e guarda seu valor
    var res = document.getElementById('res')
    // Guarda a res

    if (fano.length == 0 || fano > ano) {
        // Se fano.quantidade de caracteres for = a 0 ou fano for maior que o ano
        window.alert('[ERRO] Ano de nascimento inválido. Por favor, tente novamente.')
        // Caixa de alerta
    } else {
        // senao
        var fsex = document.getElementsByName('radiosex')
        // armazena o fsex
        var genero = ''
        // cria a variavel de genero em branco para atribuir um valor depois

        //==========================================================
        var img = document.createElement('img')
        // cria uma variavel de imagem e cria um img
        img.setAttribute('id', 'foto')
        // atribui um ID na foto
        //==========================================================

        if (fsex[0].checked) {
            // se fsex for selecionado a segunda caixa e uma muie
            genero = 'Homem'
            var idade = ano - parseInt(fano)
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebeH.jpg')
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemH.jpg')
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultoH.jpg')
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
            } else {
                //Idoso
                img.setAttribute('src', 'idosoH.jpg')
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
            }
        } else if (fsex[1].checked) {
            // se fsex for selecionado a segunda caixa e uma muie
            genero = 'Mulher'
            var idade = ano - parseInt(fano)
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebeM.jpg')
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemM.jpg')
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultoM.jpg')
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
            } else {
                //Idosa
                img.setAttribute('src', 'idosoM.jpg')
                img.setAttribute('width', '100');
                img.setAttribute('height', '100');
            }
        } 

        res.style.textAlign = 'center'
        // css ne
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // atribui um html na res do html
        res.appendChild(img)
        // Adicionar um elemento
    }
}
