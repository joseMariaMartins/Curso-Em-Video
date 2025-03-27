function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var masc = document.getElementById('masc');
        var fem = document.getElementById('fem');
        var idade = ano - Number(fano.value);
        var genero = '';


        var img = document.createElement('img'); // Adicionado para criar um elemento de imagem
        img.setAttribute('id', 'foto');

        if (masc.checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebeH.jpg');
                img.setAttribute('width', '250'); 
                img.setAttribute('height', '250');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemH.jpg');
                img.setAttribute('width', '250'); 
                img.setAttribute('height', '250');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultoH.jpg')
                img.setAttribute('width', '250'); 
                img.setAttribute('height', '250');
            } else {
                // Idoso
                img.setAttribute('src', 'idosoH.jpg')
                img.setAttribute('width', '250'); 
                img.setAttribute('height', '250');
            }
        } else if (fem.checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebeM.jpg')
                img.setAttribute('width', '250'); 
                img.setAttribute('height', '250');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemM.jpg')
                img.setAttribute('width', '250'); 
                img.setAttribute('height', '250');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultoM.jpg')
                img.setAttribute('width', '250'); 
                img.setAttribute('height', '250');
            } else {
                // Idoso
                img.setAttribute('src', 'idosoM.jpg')
                img.setAttribute('width', '250'); 
                img.setAttribute('height', '250');
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); 
    }
}
